import {useDispatch} from "react-redux";
import {CounterBlock, CounterBody, CounterBtn} from "./style";
import {deleteSelect} from "../../../../../ducks/selectsValue/actions";

const Counter = ({minCount, maxCount, text, count, onChange, addRemoveSelect, setAddRemoveSelect}) => {

    const dispatch = useDispatch()

    function decrement(e) {
        e.stopPropagation()

        if (text === 'Children' && count >= minCount) {
            dispatch(deleteSelect())
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
        <CounterBlock>
            <p>{text}</p>
            <CounterBody>
                <CounterBtn count={count}
                            minCount={minCount}
                            onClick={decrement}>-</CounterBtn>
                <p>{count}</p>
                <CounterBtn count={count}
                            maxCount={maxCount}
                            onClick={increment}>+</CounterBtn>
            </CounterBody>
        </CounterBlock>
    )
}

export default Counter
