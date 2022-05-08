import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'
import {useDispatch, useSelector} from "react-redux";

const DataPicker = () => {

    const date = useSelector(state => state.datePickerValues)
    const dispatch = useDispatch()

    const onChange = (dates) => {
        const [start, end] = dates;

        dispatch({type: 'START_DATE', payload: new Date(start).getTime()})
        dispatch({type: 'END_DATE', payload: new Date(end).getTime()})
    };
    return (
        <div className="calendarContainer" tabIndex={0}>
            <DatePicker
                id='calendarInput'
                name="datepicker"
                className="form__item"
                selected={date.dateFrom}
                minDate={new Date()}
                onChange={onChange}
                startDate={date.dateFrom}
                endDate={date.dateTo}
                selectsRange
                monthsShown={2}
                dateFormat='E, MMM d'
            />
        </div>
    );
};

export default DataPicker;
