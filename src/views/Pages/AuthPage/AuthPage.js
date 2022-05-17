import TopSectionIcons from "../../../assets/img/topSection/TopSectionIcons";
import Header from "../../TopSection/Header/Header";
import FormAuth from "./FormAuth/FormAuth";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import topBackgroundImg from '../../../assets/img/topSection/topBackground.png'
import {DarkeningLayer} from "../../TopSection/style";
import {isLogin} from "../../../ducks/user/selectors";
import {navigatePageUrl} from "../../../data/siteConfig";

const AuthSection = styled.section`
      position: relative;
      background: url(${props => props.background});
      background-size: cover;
      min-height: 100vh;
      transition: .5s ease;
`

function AuthPage() {
    const userIsLogin = useSelector(isLogin)

    return (
        !userIsLogin ?
            <AuthSection background={topBackgroundImg}>
                <DarkeningLayer/>
                <TopSectionIcons/>
                <Header/>
                <FormAuth/>
            </AuthSection>

            : <Navigate replace to={navigatePageUrl.mainPage}/>
    )
}

export default AuthPage
