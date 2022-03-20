import '../../views/modifier.css'
import './Card.css'

function Card(i) {
    return <div className='homesCard'>
        <img src={i.item.imageUrl} alt="hotel"/>
        <p className='-blue-color'>{i.item.name}</p>
        <p className='-gray-color'>{`${i.item.city}, ${i.item.country}`}</p>
    </div>
}

export default Card
