import {Link} from "react-router-dom";
import styled from "styled-components";
import {navigatePageUrl} from "../../../../data/siteConfig";
import {messages, buttonsText} from "../../../../data/siteConfig";

const WindowWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Window = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  background-color: #FFFFFF;
  padding: 36px;
  border-radius: 8px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ContinueBtn = styled.button`
  position: relative;
  font-size: 18px;
  color: #FFFFFF;
  background-color: #3077C6;
  max-width: 150px;
  border-radius: 8px;
  margin: 0 auto;
  padding: 15px;

  &:hover {
    background-color: #4387d7;
  }

  &:active {
    background-color: #1a5ca6;
  }
`

function RegisteredWindow() {
    return (
        <WindowWrapper>
            <Window>
                <p>{messages.successfullyRegistered}</p>
                <Link to={navigatePageUrl.authorization}>
                    <ContinueBtn>{buttonsText.continue}</ContinueBtn>
                </Link>
            </Window>
        </WindowWrapper>
    )
}

export default RegisteredWindow
