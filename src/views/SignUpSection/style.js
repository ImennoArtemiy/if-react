import styled from "styled-components";

export const SignUpWrapper = styled.div`
  background-color: ${props => props.theme.destinationSection.bg};
`
export const SingUpBlock = styled.section`
  background-color: ${props => props.theme.signUpSection.bg};
  position: relative;
  max-width: 1232px;
  margin: 0 auto;
  padding: 51px 0;
  transition: .2s ease;
  &:hover {
    background-color: ${props => props.theme.signUpSection.hoverBg};
    box-shadow: ${props => props.theme.signUpSection.hoverShadow};
  }
`
export const Body = styled.div`
  display: flex;
  align-items: center;
`
export const IconBody = styled.div`
  width: 86px;
  height: 86px;
  background-color: #FFFFFF;
  border-radius: 50%;
  margin: 0 24px;
`
export const IconSvg = styled.svg`
  fill: ${props => props.theme.signUpSection.userIcon};
  width: 50px;
  height: 44px;
  margin: 21px 18px;
`
export const Text = styled.p`
  color: ${props => props.theme.signUpSection.text};
  font-weight: 500;
  margin-bottom: 21px;
`
export const SignUpBtn = styled.button`
  color: ${props => props.theme.signUpSection.btnText};
  font-size: 18px;
  line-height: 21px;
  background-color: ${props => props.theme.signUpSection.btnBg};
  border: ${props => props.theme.signUpSection.btnBorder};
  border-radius: 8px;
  padding: 12px 32px;
  transition: .2s ease;
  &:hover {
    background-color: #3077C6;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
  &:active {
    background-color: #1a5ca6;
  }
`
export const CloseBtn = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 24px;
  margin-top: 24px;
  fill: #BFBFBF;
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: .1s ease;
  &:hover {
    fill: #868686;
  }
  &:active {
    fill: ${props => props.theme.signUpSection.closeBtnActive};
  }
`
