import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'

const DataPicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className="calendarContainer" tabIndex={0}>
            <DatePicker
                id='calendarInput'
                name="datepicker"
                className="form__item"
                selected={startDate}
                minDate={new Date()}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                monthsShown={2}
                dateFormat='E, MMM d'
            />
            <label htmlFor='calendarInput' className='calendarLabel' tabIndex={0}>Check-in — Check-out</label>
        </div>
    );
};

export default DataPicker;
