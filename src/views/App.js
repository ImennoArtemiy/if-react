import './App.css'
import MainPage from "./MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import AuthPage from "./AuthPage/AuthPage";
import HotelPage from "./HotelPage/HotelPage";

function App() {


    return <>
        <Routes>
            <Route path='authorization' element={<AuthPage />}/>
            <Route path="/" element={<MainPage />} />
            <Route path='hotel/:id' element={ <HotelPage />} />
        </Routes>
    </>
}

export default App
