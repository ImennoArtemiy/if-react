import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../../ducks/user/actions";
import {useState} from "react";
import {AuthBody, AuthError, AuthForm, AuthInput} from "./style";
import {resetAttemptClickSearchBtn} from "../../../../ducks/searchClickBtn/actions";
import {email, password} from "../../../../ducks/user/selectors";
import {formFields, errors} from "../../../../data/siteConfig";
import LabelInput from "../../../../components/LabelInput/LabelInput";

function FormAuth() {
    const dispatch = useDispatch()
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [error, setError] = useState(false)

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassValue(e.target.value)
    }

    const userEmail = useSelector(email)
    const userPassword = useSelector(password)

    const handleAuthClick = () => {
        if (emailValue === userEmail && passValue === userPassword) {
            dispatch(login())
        } else {
            setError(true)
        }
        dispatch(resetAttemptClickSearchBtn())
    }

    return (
        <AuthForm>
            <AuthBody>
                <h1>Sign in</h1>
                <LabelInput labelText={formFields.email}
                            inputMb='16px'
                            inputId='authEmail'
                            inputType='email'
                            inputOnChange={handleChangeEmail}
                />
                <LabelInput labelText={formFields.pass}
                            inputMb='24px'
                            inputId='authPass'
                            inputType='password'
                            inputOnChange={handleChangePass}
                />
                <button type='button' onClick={handleAuthClick}>Log In</button>
                {error && <AuthError>{errors.formAuth}</AuthError>}
            </AuthBody>
        </AuthForm>
    )
}

export default FormAuth
