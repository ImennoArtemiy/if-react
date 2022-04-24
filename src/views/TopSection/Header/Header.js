import './Header.css'
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import {Link} from "react-router-dom";
import SignOut from "../SignOut/SignOut";
import {useSelector} from "react-redux";
import {useState} from "react";

function Header ({wrapperStyle, accountStyle}) {

    const isLogin = useSelector(state => state.user.isLogged)
    const [wantsToOut, setWantsToOut] = useState(false)

    const accountClick = () => {
        setWantsToOut(!wantsToOut)
    }

    return  <header style={wrapperStyle}>
        <HeaderIcons />
        <Link to='/'>
            <svg className='headerLogo'>
                <use href='#logo'/>
            </svg>
        </Link>
        <nav className="headerMenu">
            <div className="menuText">
                <a href="#" className="menuLink">Stays</a>
                <a href="#" className="menuLink">Attractions</a>
            </div>
            <div className="menuIcons">
                <svg className='themeSwitchIcon menuIcon'>
                    <use href='#themeSwitch'/>
                </svg>
                <svg style={accountStyle}
                     className={wantsToOut ? 'accountIcon menuIcon -orangeFill' : 'accountIcon menuIcon -whiteFill'}
                     onClick={accountClick}
                >
                    <use href='#account'/>
                </svg>
                {
                  isLogin && wantsToOut && <SignOut />
                }
            </div>
        </nav>
    </header>
}

export default Header
