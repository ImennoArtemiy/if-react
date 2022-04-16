import './FormAuth.css'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../ducks/user/actions";
import {useState} from "react";

function FormAuth() {
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [error, setError] = useState({error: false})

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassValue(e.target.value)
    }

    const userEmail = useSelector(state => state.user.email)
    const userPassword = useSelector(state => state.user.password)

    const dispatch = useDispatch()
    const handleAuth = () => {
        if (emailValue === userEmail && passValue === userPassword) {
            dispatch(login())
        } else {
            setError({
                error: true
            })
        }
    }

    return <form className='authForm'>
        <div className='authBody'>
            <p className='authTitle'>Sign in</p>
            <label className="authLabel" htmlFor="authEmail">Email address</label>
            <input id='authEmail' className='authInput authEmail' type="email" onChange={handleChangeEmail}/>
            <label className="authLabel" htmlFor="authPass">Password</label>
            <input id='authPass' className='authInput authPass' type="password" onChange={handleChangePass}/>
            <button className='authButton' type='button' onClick={handleAuth}>Log In</button>
            {error.error && <p className='authError'>incorrect password or email</p>}
        </div>
    </form>
}

export default FormAuth
