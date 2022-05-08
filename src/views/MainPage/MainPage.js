import React, {useEffect, useState} from "react";
import TopSection from "../TopSection/TopSection";
import HotelsResultSection from "../HotelsResultSection/HotelsResultSection";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function MainPage() {
    const [searchData, setSearchData] = useState('')
    const [serverData, setServerData] = useState([])
    const [value, setValue] = useState(null)

    const [adultsCount, setAdultsCount] = useState(2)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(1)

    const serverUrl = 'https://fe-student-api.herokuapp.com/api/hotels'

    useEffect(() => {

        fetch(`${serverUrl}/popular`)
            .then((response) => {
                return response.json()
            })
            .then(setServerData)
    }, [])

    const dateFrom = useSelector(state => state.datePickerValues.dateFrom)
    const dateTo = useSelector(state => state.datePickerValues.dateTo)
    const selectValues = useSelector(state => state.selectValue.selectValues)
    const clickSearch = useSelector(state => state.search.try)

    useEffect(() => {

        fetch(`${serverUrl}?search=${value}&dateFrom=${dateFrom}&dateTo=${dateTo}&adults=${adultsCount}&children=${selectValues}&rooms=${roomsCount}`)
            .then((response) => {
                return response.json()
            })
            .then(setSearchData)
    }, [clickSearch])


    const isLogin = useSelector(state => state.user.isLogged)
    const email = useSelector(state => state.user.email)
    const password = useSelector(state => state.user.password)

    return isLogin && email === 'valera@gmail.com' && password === 'valerasuper123' ? (<>
        <TopSection onChange={setValue}
                    adultsCount={adultsCount}
                    setAdultsCount={setAdultsCount}
                    childrenCount={childrenCount}
                    setChildrenCount={setChildrenCount}
                    roomsCount={roomsCount}
                    setRoomsCount={setRoomsCount}
        />
        <main>

            {
                searchData.length > 0  && <HotelsResultSection data={searchData} title={'Available hotels'}/>
            }

            {
                serverData.length > 0 && <HotelsResultSection data={serverData} title={'Homes guests loves'}/>
            }

        </main>
        <Footer/>
    </>) : (<Navigate replace to='/authorization' />)
}

export default MainPage
