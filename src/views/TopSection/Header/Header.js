import HeaderIcons from "../../../assets/img/Header/HeaderIcons";
import {Link} from "react-router-dom";
import SignOut from "../SignOut/SignOut";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {MainHeader, LogoIcon, HeaderMenu, MenuTextBlock, MenuIconsBlock, ThemeIcon, AccountIcon} from "./style";
import {darkTheme, defaultTheme} from "../../../ducks/changeTheme/actions";
import {resetAttemptClickSearchBtn} from "../../../ducks/searchClickBtn/actions";
import {navigatePageUrl, homesGuestsLoves, themes, svgIcons, destinations} from "../../../data/siteConfig";
import {isLogin} from "../../../ducks/user/selectors";
import {currentTheme} from "../../../ducks/changeTheme/selector";
import {ClickAwayListener} from "@mui/base";

function Header({padding}) {
    const dispatch = useDispatch()
    const userIsLogin = useSelector(isLogin)
    const theme = useSelector(currentTheme)

    const [userWantsToOut, setUserWantsToOut] = useState(false)

    const accountClick = () => {
        setUserWantsToOut(!userWantsToOut)
    }
    const themeToggle = () => {
        if (theme === themes.default) {
            dispatch(darkTheme())
        }
        if (theme === themes.dark) {
            dispatch(defaultTheme())
        }
    }
    const resetClickSearchCount = () => {
        dispatch(resetAttemptClickSearchBtn())
    }
    const handleClickAway = () => {
        setUserWantsToOut(false)
    }

    return (
        <MainHeader padding={padding}>
            <HeaderIcons/>
            <Link to={navigatePageUrl.mainPage}>
                <LogoIcon onClick={resetClickSearchCount}>
                    <use href={svgIcons.siteLogo}/>
                </LogoIcon>
            </Link>
            <HeaderMenu>
                <MenuTextBlock>
                    <a href={`#${homesGuestsLoves.id}`}>Stays</a>
                    <a href={`#${destinations.id}`}>Attractions</a>
                </MenuTextBlock>
                <MenuIconsBlock>
                    <ThemeIcon onClick={themeToggle}>
                        <use href={svgIcons.themeSwitch}/>
                    </ThemeIcon>
                    <AccountIcon
                        userIsLogin={!userIsLogin}
                        userWantsToOut={userWantsToOut}
                        onClick={accountClick}
                    >
                        <use href={svgIcons.account}/>
                    </AccountIcon>
                    {
                        userIsLogin && userWantsToOut && (
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <div>
                                    <SignOut/>
                                </div>
                            </ClickAwayListener>
                        )
                    }
                </MenuIconsBlock>
            </HeaderMenu>
        </MainHeader>
    )
}

export default Header
