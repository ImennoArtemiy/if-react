import TopSectionIcons from "../../../assets/img/topSection/TopSectionIcons";
import Header from "../../TopSection/Header/Header";
import styled from "styled-components";
import topBackgroundImg from '../../../assets/img/topSection/topBackground.png'
import {DarkeningLayer} from "../../TopSection/style";
import FormRegistration from "./FormRegistration/FormRegistration";
import {useState} from "react";
import RegisteredWindow from "./RegisteredWindow/RegisteredWindow";

const RegistrationSection = styled.section`
  position: relative;
  background: url(${props => props.background});
  background-size: cover;
  min-height: 100vh;
  transition: .5s ease;
`

function RegistrationPage() {
    const [registered, setRegistered] = useState(false)

    return (
        <RegistrationSection background={topBackgroundImg}>
            <DarkeningLayer/>
            <TopSectionIcons/>
            <Header/>
            {
                !registered ? <FormRegistration setRegistered={setRegistered}/> : <RegisteredWindow/>
            }

        </RegistrationSection>
    )
}

export default RegistrationPage
