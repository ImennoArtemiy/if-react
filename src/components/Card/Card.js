import {Link} from "react-router-dom";
import styled from "styled-components";

const HomesCard = styled.div`
  img {
    width: 296px;
    height: 296px;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    margin-top: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
      margin-top: 15px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 14px;
      margin-top: 8px;
      &:last-child {
        margin-top: 4px;
      }
    }
  }
`
const HotelName = styled.p`
  color: #3077C6;
`
const HotelLocation = styled.p`
  color: #BFBFBF;
`

function Card({item}) {
    return <HomesCard>
        <Link to={`/hotel/${item.id}`}>
            <img src={item.imageUrl} alt="hotel"/>
        </Link>
        <Link to={`/hotel/${item.id}`}>
            <HotelName>{item.name}</HotelName>
        </Link>
        <Link to={`/hotel/${item.id}`}>
            <HotelLocation>{`${item.city}, ${item.country}`}</HotelLocation>
        </Link>
    </HomesCard>
}

export default Card
