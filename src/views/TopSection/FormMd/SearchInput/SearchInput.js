import {TextInput, Label} from "./style";
import {useEffect, useState} from "react";
import {changeValue} from "../../../../ducks/searchValue/actions";
import {useDispatch, useSelector} from "react-redux";
import {searchInputValue} from "../../../../ducks/searchValue/selectors";

function SearchInput () {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handlerChange = (event) => {
        dispatch(changeValue(event.target.value.toLowerCase()))
    }

    const searchValue = useSelector(searchInputValue)
    useEffect(() => {
        setSearch(searchValue)
    }, [searchValue])

    return (
        <>
            <TextInput value={search}
                       onChange={handlerChange}/>
            <Label>Your destination or hotel name</Label>
        </>
    )
}

export default SearchInput
