import './App.css'
import TopSection from "./TopSection/TopSection";
import HotelsResultSection from "./HotelsResultSection/HotelsResultSection";
import {useState} from "react";
import {hotels} from "../data/data";

function App() {
    const [searchValue, setSearchValue] = useState([])

    return <main>
        <TopSection searchValue={searchValue} setSearchValue={setSearchValue}/>

        {searchValue.length > 0 && <HotelsResultSection data={searchValue} title={'Available hotels'}/>}

        <HotelsResultSection data={hotels} title={'Homes guests loves'}/>
    </main>
}

export default App
