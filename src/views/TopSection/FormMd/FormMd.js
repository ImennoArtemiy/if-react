import './FormMd.css'
import {useState} from "react"
import Filter from "./Filter/Filter"
import DatePicker from "./DatePicker/DatePicker"
import {useDispatch} from "react-redux";

function FormMd({
                    onChange,
                    adultsCount,
                    setAdultsCount,
                    childrenCount,
                    setChildrenCount,
                    roomsCount,
                    setRoomsCount
                }) {

    const [openFilter, setOpenFiler] = useState(false)
    const [search, setSearch] = useState('')

    const clickFilter = (e) => {
        e.stopPropagation()
        setOpenFiler(!openFilter)
    }


    const handlerChange = (event) => {
        let inputValue = event.target.value.toLowerCase()
        setSearch(inputValue)
    }

    const dispatch = useDispatch()
    const handlerClick = () => {
        onChange(search)
        dispatch({type: "SEARCH"})
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
                <DatePicker/>
                <div className="filterContainer" tabIndex='0' onClick={clickFilter}>
                    {adultsCount} Adults — {childrenCount} Children — {roomsCount} Room
                </div>
                {
                    openFilter && <Filter adultsCount={adultsCount}
                                          childrenCount={childrenCount}
                                          roomsCount={roomsCount}
                                          setAdultsCount={setAdultsCount}
                                          setChildrenCount={setChildrenCount}
                                          setRoomsCount={setRoomsCount}
                    />
                }
                <button type='button' className="searchButton"
                        onClick={handlerClick}>Search
                </button>
            </div>
        </div>
    </form>
}

export default FormMd
