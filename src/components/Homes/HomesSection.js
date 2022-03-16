import './HomesSection.css'
import Title from "../H2/Title";
import Card from "./Card";

const titleText = 'Homes guests loves'

function HomesSection () {
    return (
        <section className='homesSection'>
            <div className='wrapper'>
                <Title text={titleText}/>
                <div className='homesCardBody'>
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default HomesSection
