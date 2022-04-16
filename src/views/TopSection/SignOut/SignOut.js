import './SignOut.css'
import SignOutIcon from "./SignOutIcon/SignOutIcon";
import {useDispatch} from "react-redux";
import {logout} from "../../../ducks/user/actions";

function SignOut () {

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <button className='signOutBlock' type='button' onClick={handleLogOut}>
            <SignOutIcon/>
            <svg className='signOutIcon'>
                <use href='#signOut'/>
            </svg>
            <p className='signOutText'>Sign out</p>
        </button>
    )
}

export default SignOut
