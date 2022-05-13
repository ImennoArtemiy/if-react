import Slider from 'react-slick'
import './slickSettings.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickArrowBtn from '../../components/ArrowBtn/SlickArrowBtn'
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import {Wrapper} from "../../styles/components";
import styled from "styled-components";

const HotelsSection = styled.section`
  font-size: 32px;
  background-color: ${props => props.theme.hotelSection.hotelBg};
`
const NotFoundText = styled.p`
  text-align: center;
  color: ${props => props.theme.hotelSection.notFoundText};
`

function HotelsResultSection({id, title, data}) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
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

    return (
        <HotelsSection id={id}>
            <Wrapper>
                <Title text={title}/>
                {
                    data.length === 0 && <NotFoundText>Nothing found for your request &#128532; &#128532; &#128532;</NotFoundText>
                }
                <Slider {...settings}>
                    {
                        data.map(item => <Card key={item.id} item={item}/>)
                    }
                </Slider>
            </Wrapper>
        </HotelsSection>
    )
}

export default HotelsResultSection
