import React, {useEffect, useState} from "react";
import TopSection from "../TopSection/TopSection";
import HotelsResultSection from "../HotelsResultSection/HotelsResultSection";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function MainPage() {
    const [searchValue, setSearchValue] = useState([])
    const [serverData, setServerData] = useState([])
    const [value, setValue] = useState('0')

    useEffect(() => {

        fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
            .then((response) => {
                return response.json()
            })
            .then(setServerData)
    }, [])


    useEffect(() => {

        fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${value}`)
            .then((response) => {
                return response.json()
            })
            .then(setSearchValue)
    }, [value])

    const isLogin = useSelector(state => state.user.isLogged)
    const email = useSelector(state => state.user.email)
    const password = useSelector(state => state.user.password)

    return isLogin && email === 'valera@gmail.com' && password === 'valerasuper123' ? (<>
        <TopSection onChange={setValue}/>
        <main>

            {searchValue.length > 0 && <HotelsResultSection data={searchValue} title={'Available hotels'}/>}

            {serverData.length > 0 && <HotelsResultSection data={serverData} title={'Homes guests loves'}/>}

        </main>
        <Footer/>
    </>) : (<Navigate replace to='/authorization' />)
}

export default MainPage
