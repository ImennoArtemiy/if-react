import './Header.css'
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import {Link} from "react-router-dom";

function Header ({wrapperStyle}) {

    return  <header style={wrapperStyle}>
        <HeaderIcons />
        <Link to='/'>
            <svg className='headerLogo'>
                <use xlinkHref='#logo'/>
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
                <svg className='accountIcon menuIcon'>
                    <use href='#account'/>
                </svg>
            </div>
        </nav>
    </header>
}

export default Header
