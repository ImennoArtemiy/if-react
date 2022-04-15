import './FormReg.css'

function FormReg () {
    return (
        <form className='regForm'>
            <div className='regBody'>
                <p className='regTitle'>Fill in the fields for registration</p>
                <label className="regLabel" htmlFor="regEmail">Email address</label>
                <input id='regEmail' className='regInput regEmail' type="email"/>
                <label className="regLabel" htmlFor="regPass">Password</label>
                <input id='regPass' className='regInput regPass' type="password"/>
                <label className="authLabel" htmlFor="regPhone">Telephone number</label>
                <input id='regPass' className='regInput regPhone' type="number"/>
                <button className='regButton' type='button'>Sign Up</button>
            </div>
        </form>
    )
}

export default FormReg
