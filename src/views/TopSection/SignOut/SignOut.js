import './SignOut.css'
import SignOutIcon from "./SignOutIcon/SignOutIcon";
import {useDispatch} from "react-redux";
import {ACTION_LOGOUT} from "../../../ducks/user/actions";

function SignOut () {

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(ACTION_LOGOUT())
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
