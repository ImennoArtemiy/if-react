import {useDispatch} from "react-redux";
import styled from "styled-components";
import {changeSelect} from "../../../../../ducks/selectsValue/actions";
import {buttonsText} from "../../../../../data/siteConfig";

const SelectTag = styled.select`
  width: 40%;
  font-size: 12px;
  border: 1px solid #3077C6;
  padding: 2px;
  margin-top: 12px;
`

function Select({index}) {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const value = e.target.value
            dispatch(changeSelect({value, index}))
    }

    return (
        <SelectTag defaultValue={buttonsText.selectAge} onChange={handleChange}>
            {
                Array.from(Array(19).keys()).map(i => {

                        i = i - 1

                        if (i === -1) {
                            return <option value={buttonsText.selectAge} disabled key={i}>{buttonsText.selectAge}</option>
                        }
                        return <option key={i} value={i}>{i} years old</option>
                    }
                )
            }
        </SelectTag>
    )
}

export default Select
