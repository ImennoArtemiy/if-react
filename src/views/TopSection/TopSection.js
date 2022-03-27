import './TopSection.css'
import './TopSectionIcons/TopSectionIcons.css'
import Header from './Header/Header'
import FormMd from "./FormMd/FormMd"
import TopSectionIcons from "./TopSectionIcons/TopSectionIcons";


function TopSection ({searchValue, setSearchValue}) {

    return <section className='topSection'>
        <TopSectionIcons />
        <Header/>
        <div className="darkeningLayer">
            <div className="topWrapper">
                <h1>Discover stays <br/>
                    to live, work or just relax</h1>
                <FormMd searchValue={searchValue} setSearchValue={setSearchValue} />
                <div className='stores'>
                    <a href="https://play.google.com" target='_blank'>
                        <svg className='googlePlay'>
                            <use href='#googlePlay'/>
                        </svg>
                    </a>
                    <a href="https://www.apple.com/app-store" target='_blank'>
                        <svg className='appleStore'>
                            <use href='#appleStore'/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default TopSection
