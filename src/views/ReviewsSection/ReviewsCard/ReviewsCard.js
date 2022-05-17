import {
    Card,
    ImageWrapper,
    Cost,
    InfoWrapper,
    HotelInfoWrapper,
    HotelName,
    HotelLocation,
    Evaluation,
    Btn,
    ReviewsCount,
    UserInfoWrapper,
    UserIcon,
    UserInfo, UserName, UserLocation, UserFlag, UserCountry, Comment,

} from "./style";
import {svgIcons} from "../../../data/siteConfig";

function ReviewsCard ({data}) {
    return (
        <Card>
            <ImageWrapper>
                <img src={data.imageUrl} alt={data.title}/>
                <Cost>{data.cost}</Cost>
            </ImageWrapper>
            <InfoWrapper>
                <HotelInfoWrapper>
                    <div>
                        <HotelName>{data.title}</HotelName>
                        <HotelLocation>{data.country}</HotelLocation>
                    </div>
                    <Evaluation>
                        <Btn>{data.rating}</Btn>
                        <ReviewsCount>{data.reviews}</ReviewsCount>
                    </Evaluation>
                </HotelInfoWrapper>
                <UserInfoWrapper>
                    <UserIcon>
                        <use href={svgIcons.account}/>
                    </UserIcon>
                    <UserInfo>
                        <UserName>{data.user}</UserName>
                        <UserLocation>
                            <UserFlag src={data.flag}/>
                            <UserCountry>{data.userFrom}</UserCountry>
                        </UserLocation>
                    </UserInfo>
                </UserInfoWrapper>
                <Comment>{data.post}</Comment>
            </InfoWrapper>
        </Card>
    )
}

export default ReviewsCard
