import TopSectionIcons from "../TopSection/TopSectionIcons/TopSectionIcons";
import Header from "../TopSection/Header/Header";
import FormAuth from "./FormAuth/FormAuth";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function AuthPage () {

    const isLogin = useSelector(state => state.user.isLogged)

    return !isLogin ? (<section className='topSection'>
        <TopSectionIcons />
        <Header accountStyle={{fill: '#F5BD41'}}/>
        <FormAuth />
    </section>) : (<Navigate replace to='/' />)
}

export default AuthPage
