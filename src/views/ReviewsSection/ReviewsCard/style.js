import styled from "styled-components";

export const Card = styled.div`
  margin-right: 16px;
  background-color: ${props => props.theme.reviewsSection.cardBg};
  min-height: 760px;
`
export const ImageWrapper = styled.div`
  position: relative;

  img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;

    &:hover {
      z-index: 0;
    }
  }
`
export const Cost = styled.p`
  position: absolute;
  bottom: 0;
  z-index: 0;
  background: rgba(0, 0, 0, .5);
  width: 100%;
  color: #FFFFFF;
  font-size: 18px;
  line-height: 21px;
  padding: 16px 24px 11px 24px;

  &:hover {
    z-index: 1;
  }
`
export const InfoWrapper = styled.div`
  font-size: 18px;
  line-height: 21px;
  padding: 25px;
`
export const HotelInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px 24px 0;
`
export const HotelName = styled.p`
  color: #3077C6;
  font-weight: 500;
  margin-bottom: 16px;
`
export const HotelLocation = styled.p`
  color: #3077C6;
`
export const Evaluation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`
export const Btn = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: #10367C;
  color: #FFFFFF;
  padding: 4px 11px;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: .2s ease;
  cursor: pointer;

  &:hover {
    background-color: #18559a;
  }

  &:active {
    background-color: #082a69;
  }
`
export const ReviewsCount = styled.p`
  text-align: right;
  font-size: 14px;
  line-height: 16px;
  color: #BFBFBF;
`
export const UserInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 19px;
  padding: 5px;
`
export const UserIcon = styled.svg`
  width: 53px;
  height: 53px;
  fill: #BFBFBF;
  margin-right: 21px;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const UserName = styled.p`
  color: ${props => props.theme.reviewsSection.text};
  margin-bottom: 8px;
`
export const UserLocation = styled.div`
  display: flex;
  align-items: center;
`
export const UserFlag = styled.img`
  width: 20px;
  height: 12px;
  margin-right: 5px;
`
export const UserCountry = styled.p`
  color: #BFBFBF;
`
export const Comment = styled.p`
  color: ${props => props.theme.reviewsSection.text};
`
