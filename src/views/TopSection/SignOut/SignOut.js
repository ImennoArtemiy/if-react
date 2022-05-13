import SignOutIconSVG from "../../../assets/img/Header/SignOutIconSVG";
import {useDispatch} from "react-redux";
import {logout} from "../../../ducks/user/actions";
import {SignOutBtn, SignOutText, SignOutIcon} from "./style";
import {svgIcons, buttonsText} from "../../../data/siteConfig";

function SignOut() {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <SignOutBtn type='button' onClick={handleLogOut}>
            <SignOutIconSVG/>
            <SignOutIcon>
                <use href={svgIcons.signOut}/>
            </SignOutIcon>
            <SignOutText>{buttonsText.signOut}</SignOutText>
        </SignOutBtn>
    )
}

export default SignOut
