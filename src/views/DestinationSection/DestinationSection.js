import {Btn, BtnContainer, DestinationSectionBlock, CardContainer, OpenHideContainer, OpenHideBtn} from "./style";
import {Wrapper} from "../../styles/components";
import Title from "../../components/Title/Title";
import {useState} from "react";
import {regions, cities, places} from "../../data/destinations";
import DestinationCard from "./DestinationCard/DestinationCard";
import arrowImg from '../../assets/arrow.png'
import {buttonsText, destinations} from "../../data/siteConfig";

function DestinationSection() {
    const [regionsActive, setRegionsActive] = useState(true)
    const [citiesActive, setCitiesActive] = useState(false)
    const [placesActive, setPlacesActive] = useState(false)
    const [hide, setHide] = useState(true)

    const destinationCard = (item) => {
        return <DestinationCard key={item.id} item={item}/>
    }

    const regionsCard = regions.map(item => {
        return destinationCard(item)
    })
    const citiesCard = cities.map(item => {
        return destinationCard(item)
    })
    const placesCard = places.map(item => {
        return destinationCard(item)
    })

    const handleClick = (e) => {
        const id = e.target.id
        if (id === buttonsText.regions) {
            setRegionsActive(true)
            setCitiesActive(false)
            setPlacesActive(false)
        }
        if (id === buttonsText.cities) {
            setRegionsActive(false)
            setCitiesActive(true)
            setPlacesActive(false)
        }
        if (id === buttonsText.places) {
            setRegionsActive(false)
            setCitiesActive(false)
            setPlacesActive(true)
        }
        setHide(true)
    }

    const openHideHandlerClick = () => {
        setHide(!hide)
    }

    return (
        <DestinationSectionBlock id={destinations.id}>
            <Wrapper>
                <Title text={destinations.title}/>
                <BtnContainer>
                    <Btn id={buttonsText.regions}
                         onClick={handleClick}
                         color={regionsActive ? '#FFF' : '#383838'}
                         bg={regionsActive ? '#3077C6' : 'transparent'}
                         hover={regionsActive ? '#4387d7' : '#e6e6e7'}
                    >{buttonsText.regions}</Btn>
                    <Btn id={buttonsText.cities}
                         onClick={handleClick}
                         color={citiesActive ? '#FFF' : '#383838'}
                         bg={citiesActive ? '#3077C6' : 'transparent'}
                         hover={citiesActive ? '#4387d7' : '#e6e6e7'}>{buttonsText.cities}</Btn>
                    <Btn id={buttonsText.places}
                         onClick={handleClick}
                         color={placesActive ? '#FFF' : '#383838'}
                         bg={placesActive ? '#3077C6' : 'transparent'}
                         hover={placesActive ? '#4387d7' : '#e6e6e7'}>{buttonsText.places}</Btn>
                </BtnContainer>
                {
                    hide && <CardContainer>
                        {
                            regionsActive && regionsCard.slice(0, 4)
                        }
                        {
                            citiesActive && citiesCard.slice(0, 4)
                        }
                        {
                            placesActive && placesCard.slice(0, 4)
                        }

                    </CardContainer>
                }
                {
                    !hide && <CardContainer>
                        {
                            regionsActive && regionsCard
                        }
                        {
                            citiesActive && citiesCard
                        }
                        {
                            placesActive && placesCard
                        }

                    </CardContainer>
                }
                <OpenHideContainer>
                    <OpenHideBtn hide={hide} onClick={openHideHandlerClick} bgImg={arrowImg}/>
                </OpenHideContainer>
            </Wrapper>
        </DestinationSectionBlock>
    )
}

export default DestinationSection
