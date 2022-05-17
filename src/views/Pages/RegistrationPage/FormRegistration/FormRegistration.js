import {Body, Form, Input, RegError} from "./style";
import {useState} from "react";
import {formFields, errors} from "../../../../data/siteConfig";
import LabelInput from "../../../../components/LabelInput/LabelInput";

function FormRegistration({setRegistered}) {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [phone, setPhone] = useState(null)

    const handleChange = (event) => {
        let id = event.target.id
        let value = event.target.value

        if (id === 'regEmail') {
            setEmail(value)
        }
        if (id === 'regPass') {
            setPass(value)
        }
        if (id === 'regPhone') {
            setPhone(value)
        }
    }

    const handleRegisteredClick = () => {
            if (email === null || pass === null || phone === null) {
                setError(true)
            } else {
                setRegistered(true)
            }

    }

    return (
        <Form>
            <Body>
                <h1>Fill in the fields</h1>
                <LabelInput labelText={formFields.email}
                            inputMb='16px'
                            inputId='regEmail'
                            inputType='email'
                            inputOnChange={handleChange}
                />
                <LabelInput labelText={formFields.pass}
                            inputMb='16px'
                            inputId='regPass'
                            inputType='password'
                            inputOnChange={handleChange}
                />
                <LabelInput labelText={formFields.phone}
                            inputMb='24px'
                            inputId='regPhone'
                            inputType='number'
                            inputOnChange={handleChange}
                />
                <button onClick={handleRegisteredClick} type='button'>Sign up</button>
                {error && <RegError>{errors.formReg}</RegError>}
            </Body>
        </Form>
    )
}

export default FormRegistration
