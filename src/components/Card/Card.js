import '../../views/modifier.css'
import './Card.css'
import { Link } from "react-router-dom";

function Card(i) {

    return <div className='homesCard'>
        <Link className='hotelLink' to={`/hotel/${i.item.id}`}>
            <img src={i.item.imageUrl} alt="hotel"/>
        </Link>
        <Link className='hotelLink' to={`/hotel/${i.item.id}`}>
            <p className='-blue-color'>{i.item.name}</p>
        </Link>
        <Link className='hotelLink' to={`/hotel/${i.item.id}`}>
            <p className='-gray-color'>{`${i.item.city}, ${i.item.country}`}</p>
        </Link>
    </div>
}

export default Card
