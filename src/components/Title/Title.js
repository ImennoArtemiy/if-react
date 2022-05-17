import styled from "styled-components";

const TitleH2 = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  margin-bottom: 90px;
  color: ${props => props.theme.titleColor};
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }
`

function Title({text}) {

    return (
        <TitleH2>{text}</TitleH2>
    )
}

export default Title
