import styled from "styled-components";
import {Wrapper} from "../../styles/components";
import Title from "../../components/Title/Title";
import OfferSectionSVG from "../../assets/img/OfferSection/OfferSectionSVG";
import OfferCard from "./OfferCard";

const offerData = [
    {
        svg: 'headset',
        text: 'Support 24/7',
    },
    {
        svg: 'forum',
        text: 'Communicate directly',
    },
    {
        svg: 'devise',
        text: 'Book online',
    },
    {
        svg: 'thumbUp',
        text: 'Real guest reviews directly',
    },
]

const OfferSectionTag = styled.div`
  background-color: ${props => props.theme.offerSection.offerBg};
`
const OfferBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function OfferSection() {
    return (
        <OfferSectionTag>
            <Wrapper>
                <Title text='What do we offer'/>
                <OfferBody>
                    <OfferSectionSVG/>
                    {
                        offerData.map((cardInfo, i) => <OfferCard key={i} cardInfo={cardInfo}/>)
                    }
                </OfferBody>
            </Wrapper>
        </OfferSectionTag>
    )
}

export default OfferSection
