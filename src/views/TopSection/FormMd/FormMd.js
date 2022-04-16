import './FormMd.css'
import {useState} from "react"
import Filter from "./Filter/Filter"
import DatePicker from "./DatePicker/DatePicker"

function FormMd ({onChange}) {

    const [adultsCount, setAdultsCount] = useState(2)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(1)

    const [stateFilter, setStateFiler] = useState(false)

    const clickFilter = (e) => {
        e.stopPropagation()
        setStateFiler(!stateFilter)
    }

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
                <DatePicker />
                <div className="filterContainer" tabIndex='0' onClick={clickFilter}>
                    {adultsCount} Adults — {childrenCount} Children — {roomsCount} Room
                </div>
                {
                    stateFilter && <Filter adultsCount={adultsCount}
                                                          childrenCount={childrenCount}
                                                          roomsCount={roomsCount}
                                                          setAdultsCount={setAdultsCount}
                                                          setChildrenCount={setChildrenCount}
                                                          setRoomsCount={setRoomsCount} />
                }
                <button type='button' className="searchButton"
                        onClick={handlerClick}>Search</button>
            </div>
        </div>
    </form>
}

export default FormMd
