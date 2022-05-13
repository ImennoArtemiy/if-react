import styled from "styled-components";

export const MainHeader = styled.header`
      position: relative;
      display: flex;
      justify-content: space-between;
      max-width: 1232px;
      margin: 0 auto;
      padding: ${props => props.padding || '30px 32px 0'};
      box-sizing: content-box;
    `
export const LogoIcon = styled.svg`
      display: flex;
      align-items: center;
      fill: #3077C6;
      width: 205px;
      height: 40px;
      cursor: pointer;
      transition: 0.2s ease;

      &:active {
        fill: #2052af;
      }
    `
export const HeaderMenu = styled.nav`
      display: flex;
    `
export const MenuTextBlock = styled.div`
      display: flex;
      align-items: center;

      a {
        position: relative;
        color: #FFFFFF;
        text-decoration: none;
        margin-right: 24px;
        transition: 0.2s ease;

        &:hover {
          color: rgba(245, 189, 65, 1);
        }

        &:active {
          color: rgb(211, 149, 12);
        }

        &:after {
          display: none;
          position: absolute;
          left: 8%;
          bottom: -32%;
          content: '';
          width: 85%;
          height: 3px;
          background-color: #F5BD41;
        }

        &:hover:after {
          display: block;
        }
      }
    `
export const MenuIconsBlock = styled.div`
      display: flex;
      align-items: center;
    `
export const ThemeIcon = styled.svg`
      fill: ${props => props.theme.themeIconFill};
      width: 30px;
      height: 30px;
      margin-right: 24px;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        fill:rgba(245, 189, 65, 1);
      }
      &:active {
        fill: rgb(211, 149, 12);
      }
    `
export const AccountIcon = styled.svg`
      fill: ${props => props.userWantsToOut || props.userIsLogin ? '#F5BD41' : '#fff'};
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        fill:rgba(245, 189, 65, 1);
      }
      &:active {
        fill: rgb(211, 149, 12);
      }
    `
