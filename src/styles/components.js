import styled, {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: #383838;
    font-size: 24px;
    line-height: 28px;
  }
  li {
    list-style: none;
  }
  button {
    background-color: transparent;
    cursor: pointer;
  }
  input {
    float: left;
    &:focus {
      outline: 0;
    }
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  img {
    display: block;
  }
  a {
    text-decoration: none;
  }
`

export const Wrapper = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  padding: ${props => props.padding || '120px 32px'};
  box-sizing: content-box;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`
export const TopWrapper = styled.div`
  position: relative;
  max-width: 1232px;
  margin: 0 auto;
  padding: 205px 32px 140px;
  box-sizing: content-box;
`
