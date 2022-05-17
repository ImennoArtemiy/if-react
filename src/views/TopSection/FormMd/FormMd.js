import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react"
import SearchInput from "./SearchInput/SearchInput";
import DatePicker from "./DatePicker/DatePicker"
import Filter from "./Filter/Filter"
import {ClickAwayListener} from "@mui/base";
import {clickSearchBtn} from "../../../ducks/searchClickBtn/actions";
import {BorderContainer, ButtonWrapper, FilterBtn, Form, SearchBtn} from "./style";
import {availableHotels, filter} from "../../../data/siteConfig";
import {searchInputValue} from "../../../ducks/searchValue/selectors";

function FormMd({
                    onChange,
                    adultsCount,
                    setAdultsCount,
                    childrenCount,
                    setChildrenCount,
                    roomsCount,
                    setRoomsCount
                }) {

    const [openFilter, setOpenFilter] = useState(false)
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const handleFilterBtn = (e) => {
        (e.target.id === filter.filterBtn.id) && setOpenFilter(!openFilter)
    }

    const handlerSearchClick = () => {
        onChange(search)
        dispatch(clickSearchBtn())
    }
    const handleClickAway = () => {
        setOpenFilter(false)
    }

    const searchValue = useSelector(searchInputValue)
    useEffect(() => {
        setSearch(searchValue)
    }, [searchValue])

    return (
        <Form>

            <BorderContainer>
                <SearchInput/>
                <ButtonWrapper>
                    <DatePicker/>
                    <FilterBtn id={filter.filterBtn.id} tabIndex='0'
                               onClick={handleFilterBtn}>
                        {
                            filter.filterBtn.getTitle(adultsCount, childrenCount, roomsCount)
                        }
                        {
                            openFilter &&
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <div>
                                    <Filter adultsCount={adultsCount}
                                            childrenCount={childrenCount}
                                            roomsCount={roomsCount}
                                            setAdultsCount={setAdultsCount}
                                            setChildrenCount={setChildrenCount}
                                            setRoomsCount={setRoomsCount}
                                    />
                                </div>
                            </ClickAwayListener>
                        }
                    </FilterBtn>

                    <a href={`#${availableHotels.id}`}>
                        <SearchBtn onClick={handlerSearchClick}>Search</SearchBtn>
                    </a>
                </ButtonWrapper>
            </BorderContainer>
        </Form>
    )
}

export default FormMd
