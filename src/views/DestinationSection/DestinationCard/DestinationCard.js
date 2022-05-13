import {BlackOutContainer, Card, ImageContainer, ReservationBtn, Text} from "./style";
import {useDispatch} from "react-redux";
import {changeValue} from "../../../ducks/searchValue/actions";
import {buttonsText, topSection} from "../../../data/siteConfig";

function DestinationCard ({item}) {
    const dispatch = useDispatch()

    const handlerBookNowClick = () => {
        dispatch(changeValue(item.text))
    }

    return (
        <Card>
            <ImageContainer>
                <img src={item.imageUrl} alt={item.text}/>
                <BlackOutContainer>
                    <a href={`#${topSection.id}`}>
                        <ReservationBtn onClick={handlerBookNowClick}>{buttonsText.bookNow}</ReservationBtn>
                    </a>
                </BlackOutContainer>
            </ImageContainer>
            <Text>{item.text}</Text>
        </Card>
    )
}

export default DestinationCard
