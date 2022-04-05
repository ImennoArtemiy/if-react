import './Counter.css'

const Counter = ({minCount, maxCount, text, count, onChange, addRemoveSelect, setAddRemoveSelect}) => {

    function decrement(e) {
        e.stopPropagation()

        if (text === 'Children' && count >= minCount) {
            setAddRemoveSelect(addRemoveSelect.slice(0, -1))
        }

        if (count === minCount) {
            return count
        }
        onChange(--count)
    }

    function increment(e) {
        e.stopPropagation()

        if (text === 'Children' && count < maxCount) {
            setAddRemoveSelect([...addRemoveSelect, 'Select Component'])
        }

        if (count === maxCount) {
            return count
        }
        onChange(++count)
    }

    return (
        <div className='counterBlock'>
            <p>{text}</p>
            <div className="counterBody">
                <button type='button'
                        className={count === minCount ? 'counterBtn -disableBtn' : 'counterBtn'}
                        onClick={decrement}>-</button>
                <p>{count}</p>
                <button type='button'
                        className={count === maxCount ? 'counterBtn -disableBtn' : 'counterBtn'}
                        onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter
