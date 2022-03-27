import './FormMd.css'
import {useState} from "react";
import {hotels} from "../../../data/data";

function FormMd ({searchValue, setSearchValue}) {

    const [value, setValue] = useState('0')

    const handlerChange = (event) => {
        let inputValue = event.target.value.toLowerCase()
        setValue(inputValue)
    }

    let searchValueArray = searchValue

    const handlerClick = () => {

        searchValueArray = hotels.filter(hotel => {
            return  hotel.name.toLowerCase().includes(value) ||
                hotel.city.toLowerCase().includes(value) ||
                hotel.country.toLowerCase().includes(value)
        })
        setSearchValue(searchValueArray)
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
