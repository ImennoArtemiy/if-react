import {Wrapper} from "../../styles/components";
import Title from "../../components/Title/Title";
import styled from "styled-components";
import guestsReviews from "../../data/reviews";
import ReviewsCard from "./ReviewsCard/ReviewsCard";
import Slider from 'react-slick'
import SlickArrowBtn from "../../components/ArrowBtn/SlickArrowBtn";
import '../HotelsResultSection/slickSettings.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {reviews} from "../../data/siteConfig";

const ReviewsSectionBlock = styled.section`
  background-color: ${props => props.theme.reviewsSection.bg};
`
const settings = {
    edgeFriction:0,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowBtn/>,
    prevArrow: <SlickArrowBtn/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};

function ReviewsSection () {
    return (
        <ReviewsSectionBlock>
            <Wrapper>
                <Title text={reviews.title}/>
                    <Slider {...settings}>
                        {
                            guestsReviews.map(guest => <ReviewsCard key={guest.id} data={guest}/>)
                        }
                    </Slider>
            </Wrapper>
        </ReviewsSectionBlock>
    )
}

export default ReviewsSection
