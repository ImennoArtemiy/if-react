import {Body, IconBody, IconSvg, SingUpBlock, Text, SignUpBtn, CloseBtn, SignUpWrapper} from "./style";
import SignUpSVG from "../../assets/img/signUp/SignUpSVG";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../ducks/user/actions";
import {navigatePageUrl, svgIcons, messages, buttonsText} from "../../data/siteConfig";

function SignUpSection({setClose}) {

    const dispatch = useDispatch()

    const handlerSignUpClick = () => {
        dispatch(logout())
    }
    const handlerCloseClick = () => {
        setClose(true)
    }

    return (
        <SignUpWrapper>
            <SingUpBlock>
                <SignUpSVG/>
                <Body>
                    <IconBody>
                        <IconSvg>
                            <use href={svgIcons.signUp}/>
                        </IconSvg>
                    </IconBody>
                    <div>
                        <Text>{messages.signUp}</Text>
                        <Link to={navigatePageUrl.registration}>
                            <SignUpBtn onClick={handlerSignUpClick}>{buttonsText.signUp}</SignUpBtn>
                        </Link>
                    </div>
                    <CloseBtn onClick={handlerCloseClick}>
                        <use href={svgIcons.closeBtn}/>
                    </CloseBtn>
                </Body>
            </SingUpBlock>
        </SignUpWrapper>
    )
}

export default SignUpSection
