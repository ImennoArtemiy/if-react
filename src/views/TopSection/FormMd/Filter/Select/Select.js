import './Select.css'
import {useDispatch} from "react-redux";

function Select({index}) {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const value = e.target.value
        if (value !== 'Select age') {
            dispatch({type: 'CHANGE_SELECT', payload: {value, index}})
        }

    }

    return (

        <select onChange={handleChange}>
            {
                Array.from(Array(19).keys()).map(i => {

                        i = i - 1

                        if (i === -1) {
                            return <option selected disabled key={i}>Select age</option>
                        }
                        return <option key={i} value={i}>{i} years old</option>
                    }
                )
            }
        </select>

    )
}

export default Select
