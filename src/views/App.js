import MainPage from "./Pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HotelPage from "./Pages/HotelPage/HotelPage";
import {ThemeProvider} from "styled-components";
import {themes} from "../data/theme";
import {useSelector} from "react-redux";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import {navigatePageUrl} from "../data/siteConfig";
import {currentTheme} from "../ducks/changeTheme/selector";

function App() {

    const theme = useSelector(currentTheme)

    return (
        <ThemeProvider theme={themes[theme]}>
            <Routes>
                <Route path={navigatePageUrl.authorization} element={<AuthPage/>}/>
                <Route path={navigatePageUrl.registration} element={<RegistrationPage/>}/>
                <Route path={navigatePageUrl.mainPage} element={<MainPage/>}/>
                <Route path={navigatePageUrl.hotelPage} element={<HotelPage/>}/>
            </Routes>
        </ThemeProvider>
    )
}

export default App
