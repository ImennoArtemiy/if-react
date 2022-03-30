import './FormMd.css'
import {useState} from "react";

function FormMd ({onChange}) {

    const [search, setSearch] = useState('0')

    const handlerChange = (event) => {
        let inputValue = event.target.value.toLowerCase()
        setSearch(inputValue)
    }

    const handlerClick = () => {
        onChange(search)
    }

    return <form action=''>
        <div className='searchField'>
            <input id='textToFindInput'
                   className='textToFindInput'
                   type='text'
                   required
                   onChange={handlerChange}
                    />
            <label className='textToFindLabel' htmlFor='textToFindInput'>Your destination or hotel name</label>
        </div>
        <div className='borderContainer'>
            <div className="buttonContainer">
                <div className="calendarContainer" tabIndex='0'>Check-in — Check-out</div>
                <div className="filterContainer" tabIndex='0'>2 Adults — 0 Children — 1 Room</div>
                <button type='button' className="searchButton"
                        onClick={handlerClick}>Search</button>
            </div>
        </div>
    </form>
}

export default FormMd
