import styled from "styled-components";

export const HotelPageSection = styled.main`
  background-color: ${props => props.theme.footer.bg};
  transition: .5s ease;
`

export const HotelBody = styled.div`
  display: flex;
  background-color: ${props => props.theme.hotelPage.bg};
  max-width: 1232px;
  margin: 60px auto;
  border: 4px solid #F5BD41;
  transition: .5s ease;

  img {
    display: block;
    width: 300px;
    height: 300px;
    margin-right: 30px;
  }
`
export const HotelInfo = styled.div`
  color:${props => props.theme.hotelPage.text};
  padding: 25px 0 0 0;

  h1 {
    margin: 0;
    font-size: 28px;
    line-height: 24px;
  }

  p {
    text-align: justify;
    max-width: 820px;
    margin-top: 20px;
  }
`
