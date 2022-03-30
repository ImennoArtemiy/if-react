import './HotelsResultSection.css'
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";

function HotelsResultSection ({title, data}) {

    return (
        <section className='homesSection'>
            <div className='wrapper'>
                <Title text={title}/>
                <div className='homesCardBody'>
                    {data.map(i => <Card key={i.id} item={i} />)}
                </div>
            </div>
        </section>
    )
}

export default HotelsResultSection
