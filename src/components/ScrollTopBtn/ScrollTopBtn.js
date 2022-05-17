import {handleScrollTopClick} from "../../funcs/funcs";
import styled from "styled-components";

const UpBtn = styled.button`
  position: fixed;
  bottom: 4%;
  right: 2%;
  width: 35px;
  height: 35px;
  background-color: #3077C6;
  color: #FFFFFF;
  border-radius: 50%;
  padding: 25px;
  p {
    position: absolute;
    top: 10%;
    right: 40%;
    font-size: 32px;
    transform: rotate(-90deg);
  }
`

function ScrollTopBtn () {

    return (
        <UpBtn onClick={handleScrollTopClick}>
            <p>&rang;</p>
        </UpBtn>
    )
}

export default ScrollTopBtn
