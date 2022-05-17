import styled from "styled-components"

const OfferCardBody = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1232px) {
        width: 50%;
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`
const OfferSvg = styled.svg`
    margin-bottom: 48px;
    fill: ${props => props.theme.offerSection.offerIconFill};
    transition: all 1s ease;
`
const OfferText = styled.p`
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    color: ${props => props.theme.offerSection.offerTextColor}
`

function OfferCard ({cardInfo}) {
    return (
        <OfferCardBody>
            <OfferSvg>
                <use href={`#${cardInfo.svg}`}/>
            </OfferSvg>
            <OfferText>
                {cardInfo.text}
            </OfferText>
        </OfferCardBody>
    )
}

export default OfferCard
