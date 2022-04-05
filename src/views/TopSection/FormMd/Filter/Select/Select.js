import './Select.css'

function Select () {
    return (
        <select>
            {
                Array.from(Array(18).keys()).map(i =>
                    <option key={i} value={i}>{i} years old</option>
                )
            }
        </select>
    )
}

export default Select
