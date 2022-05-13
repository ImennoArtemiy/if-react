import styled from "styled-components";

export const SignOutBtn = styled.button`
      position: absolute;
      top: 90px;
      right: 32px;
      display: flex;
      background-color: #FFFFFF;
      padding: 15px;
      transition: ease .2s;
      z-index: 1000;
      &:hover {
        background-color: #e5e5e5;
      }
      &:active {
        background-color: #CECECE;
      }
    `
export const SignOutIcon = styled.svg`
      width: 20px;
      height: 18px;
      margin-right: 15px;
    `
export const SignOutText = styled.p`
      font-size: 20px;
      line-height: 20px;
      margin-right: 15px;
    `
