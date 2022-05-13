import {Body, Form, Input, RegError} from "./style";
import {useState} from "react";
import {formFields, errors} from "../../../../data/siteConfig";

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
                <label htmlFor="regEmail">{formFields.email}</label>
                <Input mb='16px'
                       id='regEmail'
                       type="email"
                       onChange={handleChange}/>
                <label htmlFor="regPass">{formFields.pass}</label>
                <Input mb='24px'
                       id='regPass'
                       type="password"
                       onChange={handleChange}/>
                <label htmlFor="regPhone">{formFields.phone}</label>
                <Input mb='24px'
                       id='regPhone'
                       type="number"
                       onChange={handleChange}
                />
                <button onClick={handleRegisteredClick} type='button'>Sign up</button>
                {error && <RegError>{errors.formReg}</RegError>}
            </Body>
        </Form>
    )
}

export default FormRegistration
