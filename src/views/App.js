import './App.css'
import TopSection from "./TopSection/TopSection";
import HotelsResultSection from "./HotelsResultSection/HotelsResultSection";
import React, {useEffect, useState} from "react";
import Footer from "./Footer/Footer";

function App() {
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


    return <>
        <main>
            <TopSection onChange={setValue}/>

            {searchValue.length > 0 && <HotelsResultSection data={searchValue} title={'Available hotels'}/>}

            {serverData.length > 0 && <HotelsResultSection data={serverData} title={'Homes guests loves'}/>}

        </main>
        <Footer/>
    </>


}

export default App
