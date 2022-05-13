import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  margin-bottom: 120px;
`
export const BorderContainer = styled.div`
  background-color: #FFFFFF;
  border: 3px solid #F3F3F4;
  height: 64px;
  border-radius: 8px;
  margin-top: 16px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-height: 64px;
  position: absolute;
  top: 0;
  right: 0;
`
export const FilterBtn = styled.div.attrs({tabIndex: 0})`
  position: relative;
  font-size: 18px;
  line-height: 21px;
  padding: 21px 24px;
  border: 3px solid rgba(245, 189, 65, 0);
  border-radius: 8px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    border: 3px solid #dedee1;
  }

  &:focus-within {
    border: 3px solid #F5BD41;
  }
`
export const SearchBtn = styled.button.attrs({type: 'button'})`
  padding: 15px 55px;
  background-color: #3077C6;
  color: #FFFFFF;
  border: 3px solid rgba(255, 255, 255, 0);
  border-radius: 8px;
  font-size: 24px;
  line-height: 28px;
  transition: .2s ease;

  &:hover {
    background-color: #4387d7;
  }

  &:active {
    background-color: #1a5ca6;
    border: 3px solid #FFFFFF;
  }
`
