import styled from "styled-components";

export const TopSectionTag = styled.section`
  background: url(${props => props.background});
  background-size: cover;
  min-height: 100vh;
  position: relative;
`
export const DarkeningLayer = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${props => props.theme.darkLayerOpacity};
  background-color: black;
  position: absolute;
  transition: .5s ease;
`
export const MainTitle = styled.h1`
  font-weight: 500;
  font-size: 50px;
  line-height: 58px;
  color: #FFFFFF;
  margin-bottom: 145px;
`
export const Stores = styled.div`
  display: flex;
  justify-content: center;

  a:not(:last-child) {
    margin-right: 16px;
  }
`
export const GooglePlayIcon = styled.svg`
  width: 135px;
  height: 40px;
`
export const AppleStoreIcon = styled.svg`
  width: 120px;
  height: 40px;
`
