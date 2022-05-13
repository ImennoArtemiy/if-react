import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
`

export const AuthBody = styled.div`
  position: relative;
  width: 400px;
  background-color: #FFFFFF;
  padding: 36px 40px;

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  label {
    display: block;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    background-color: #3077C6;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 35px;
    &:hover {
      background-color: #4387d7;
    }
    &:active {
      background-color: #1a5ca6;
    }
  }
`
export const AuthInput = styled.input`
  display: block;
  width: 100%;
  height: 41px;
  padding: 12px;
  border: 2px solid #CECECE;
  border-radius: 8px;
  margin-bottom: ${props => props.mb};
`

export const AuthError = styled.p`
  position: absolute;
  bottom: 5%;
  left: 22%;
  color: red;
  font-size: 18px;
`
