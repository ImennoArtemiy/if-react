import styled from "styled-components";

export const DestinationSectionBlock = styled.section`
  background-color: ${props => props.theme.destinationSection.bg};
`
export const BtnContainer = styled.div`
  display: inline-block;
  background-color: #F3F3F4;
  border-radius: 8px;
  margin-bottom: 40px;
`
export const Btn = styled.button`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  padding: 16px 50px;
  border-radius: 8px;
  font-size: 24px;
  line-height: 28px;
  transition: .2s ease;

  &:hover {
    background-color: ${props => props.hover};
  }

  &:active {
    background-color: #1a5ca6;
    color:#FFFFFF;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`
export const OpenHideContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const OpenHideBtn = styled.div`
  width: 35px;
  height: 35px;
  background: url(${props => props.bgImg}) no-repeat #F3F3F4 center;
  border-radius: 50%;
  padding: 5px;
  transform: ${props => props.hide ? 'translateX(-25%) rotate(90deg)' : 'translateX(-25%) rotate(270deg)'};
  transition: .2s ease;
  filter: ${props => props.hide ? 'drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25))' : 'drop-shadow(-4px 0px 4px rgba(0, 0, 0, 0.25))'};

  &:hover {
    background-color: #eaeaea;
  }

  &:active {
    background-color: #dedede;
  }
;
`
