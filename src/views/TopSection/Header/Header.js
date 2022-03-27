import './Header.css'
import HeaderIcons from "./HeaderIcons/HeaderIcons";

function Header () {
    return <header>
        <HeaderIcons />
        <svg className='headerLogo'>
            <use xlinkHref='#logo'/>
        </svg>
        <nav className="header__menu menu">
            <div className="menu__text">
                <a href="#" className="menu__link">Stays</a>
                <a href="#" className="menu__link">Attractions</a>
            </div>
            <div className="menu__icons">
                <svg className='themeSwitchIcon'>
                    <use href='#themeSwitch'/>
                </svg>
                <svg className='accountIcon'>
                    <use href='#account'/>
                </svg>
            </div>
        </nav>
    </header>
}

export default Header
