import Header from "../../TopSection/Header/Header";
import {Navigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Footer from "../../Footer/Footer";
import {useSelector} from "react-redux";
import {HotelBody, HotelInfo, HotelPageSection} from "./style";
import {handleScrollTopClick, serverRequest} from "../../../funcs/funcs";
import {isLogin} from "../../../ducks/user/selectors";
import {navigatePageUrl, hotelPage, hotelsUrl} from "../../../data/siteConfig";

function HotelPage() {
    const userIsLogin = useSelector(isLogin)
    const {id} = useParams()
    const [hotelData, setHotelData] = useState({})

    serverRequest(useEffect, hotelsUrl(id), setHotelData)
    handleScrollTopClick()

    return (
        userIsLogin ?
            <HotelPageSection>
                <Header padding='30px 32px 30px 32px'/>
                <HotelBody>
                    <img src={hotelData.imageUrl} alt={hotelData.name}/>
                    <HotelInfo>
                        <h1>{hotelData.name}</h1>
                        <p>
                            {
                                hotelPage.getHotelInfo(hotelData.country, hotelData.city)
                            }
                        </p>
                    </HotelInfo>
                </HotelBody>
                <Footer padding='10px 32px'/>
            </HotelPageSection>

            : <Navigate replace to={navigatePageUrl.authorization}/>
    )
}

export default HotelPage
