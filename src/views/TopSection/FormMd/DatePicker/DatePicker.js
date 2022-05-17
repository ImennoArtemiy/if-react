import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './DatePicker.css'
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import {endDate, startDate} from "../../../../ducks/datePickerValues/actions";
import {dateFromValue, dateToValue} from "../../../../ducks/datePickerValues/selectors";

const DataPicker = () => {

    const [isActive, setIsActive] = useState(false)

    const disableField = () => {
        setIsActive(false)
    }
    const handleFocus = (e) => {
        if (e.target.value === "") {
            disableField(e)
        }
        setIsActive(true)
    }

    const disableFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
    }
    const onChangeRaw = (e) => {
        e.preventDefault()
    }

    const dateFrom = useSelector(dateFromValue)
    const dateTo = useSelector(dateToValue)
    const dispatch = useDispatch()

    const onChange = (dates) => {
        const [start, end] = dates
        dispatch(startDate(new Date(start).getTime()))
        dispatch(endDate(new Date(end).getTime()))
    }

    const input = document.querySelector('.form__item ')
    const container = document.querySelector('.calendarContainer')
    const provokeFocusInput = () => {
        input.focus()
        container.focus()
    }

    return (
        <div onClick={provokeFocusInput} className="calendarContainer" tabIndex={0}>
            <div className="label__wrapper">
                <label className={isActive ? "active" : ""}>Check-in — Check-out</label>
            </div>
            <DatePicker
                onFocus={handleFocus}
                onBlur={disableFocus}
                onChangeRaw={onChangeRaw}
                id='calendarInput'
                name="datepicker"
                className="form__item"
                selected={dateFrom}
                minDate={new Date()}
                onChange={onChange}
                startDate={dateFrom}
                endDate={dateTo}
                selectsRange
                monthsShown={2}
                dateFormat='E, MMM d'
            />
        </div>
    )
}

export default DataPicker;
