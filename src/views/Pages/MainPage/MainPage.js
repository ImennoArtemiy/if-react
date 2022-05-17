import React, {useEffect, useState} from "react";
import TopSection from "../../TopSection/TopSection";
import HotelsResultSection from "../../HotelsResultSection/HotelsResultSection";
import Footer from "../../Footer/Footer";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import OfferSection from "../../OfferSection/OfferSection";
import DestinationSection from "../../DestinationSection/DestinationSection";
import SignUpSection from "../../SignUpSection/SignUpSection";
import ReviewsSection from "../../ReviewsSection/ReviewsSection";
import ScrollTopBtn from "../../../components/ScrollTopBtn/ScrollTopBtn";
import {isLogin} from "../../../ducks/user/selectors";
import {
    popular,
    availableHotels,
    homesGuestsLoves,
    navigatePageUrl,
    queryParams, hotelsUrl
} from "../../../data/siteConfig";
import {serverRequest, showGoToTopBnt} from "../../../funcs/funcs";
import {dateFromValue, dateToValue} from "../../../ducks/datePickerValues/selectors";
import {selectValues} from "../../../ducks/selectsValue/selectors"
import {attemptToClick} from "../../../ducks/searchClickBtn/selectors";

function MainPage() {
    const [searchData, setSearchData] = useState('')
    const [popularHotels, setPopularHotels] = useState([])
    const [searchValue, setSearchValue] = useState(null)

    const [adultsCount, setAdultsCount] = useState(2)
    const [childrenCount, setChildrenCount] = useState(0)
    const [roomsCount, setRoomsCount] = useState(1)

    const [closeBtn, setCloseBtn] = useState(false)

    const [showScrollBtn, setShowScrollBtn] = useState(false)
    showGoToTopBnt(setShowScrollBtn)

    serverRequest(useEffect, hotelsUrl(popular), setPopularHotels)

    const userIsLogin = useSelector(isLogin)
    const dateFrom = useSelector(dateFromValue)
    const dateTo = useSelector(dateToValue)
    const childAges = useSelector(selectValues)
    const attemptToClickSearchBtn = useSelector(attemptToClick)

    serverRequest(useEffect, hotelsUrl(queryParams(
        searchValue, dateFrom, dateTo, adultsCount, childAges, roomsCount
    )), setSearchData, attemptToClickSearchBtn)

    return (
        userIsLogin ?
            <>
                {
                    showScrollBtn && <ScrollTopBtn setShowBtn={setShowScrollBtn}/>
                }
                <TopSection onChange={setSearchValue}
                            adultsCount={adultsCount}
                            setAdultsCount={setAdultsCount}
                            childrenCount={childrenCount}
                            setChildrenCount={setChildrenCount}
                            roomsCount={roomsCount}
                            setRoomsCount={setRoomsCount}
                />
                <main>
                    {
                        searchData.length > 0 &&
                        <HotelsResultSection id={availableHotels.id}
                                             data={searchData}
                                             title={availableHotels.getTitle(searchData.length)}
                        />
                    }
                    {
                        searchData.length === 0 && attemptToClickSearchBtn > 0 ?
                            <HotelsResultSection id={availableHotels.id}
                                                 data={searchData}
                                                 title={availableHotels.getTitle(searchData.length)}
                            /> : null
                    }
                    <OfferSection/>
                    {
                        popularHotels.length > 0 &&
                        <HotelsResultSection id={homesGuestsLoves.id} data={popularHotels}
                                             title={homesGuestsLoves.title}
                        />
                    }
                    <DestinationSection/>
                    {
                        !closeBtn && <SignUpSection setClose={setCloseBtn}/>
                    }
                    <ReviewsSection/>
                </main>
                <Footer/>
            </>
            : <Navigate replace to={navigatePageUrl.authorization}/>
    )
}

export default MainPage
