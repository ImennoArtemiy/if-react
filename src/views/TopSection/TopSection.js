import Header from './Header/Header'
import FormMd from "./FormMd/FormMd"
import TopSectionIcons from "../../assets/img/topSection/TopSectionIcons";
import {TopWrapper} from "../../styles/components";
import {TopSectionTag, MainTitle, Stores, GooglePlayIcon, AppleStoreIcon, DarkeningLayer} from "./style";
import topBackgroundImg from '../../assets/img/topSection/topBackground.png'
import {svgIcons, googlePlayUrl, appleStoreUrl, topSection} from "../../data/siteConfig";

function TopSection({
                        onChange,
                        adultsCount,
                        setAdultsCount,
                        childrenCount,
                        setChildrenCount,
                        roomsCount,
                        setRoomsCount
                    }) {

    return (
        <TopSectionTag id={topSection.id} background={topBackgroundImg}>
            <DarkeningLayer/>
            <TopSectionIcons/>
            <Header/>
            <TopWrapper>
                <MainTitle>
                    {topSection.titleFirst}<br/>{topSection.titleSecond}
                </MainTitle>
                <FormMd
                    onChange={onChange}
                    adultsCount={adultsCount}
                    setAdultsCount={setAdultsCount}
                    childrenCount={childrenCount}
                    setChildrenCount={setChildrenCount}
                    roomsCount={roomsCount}
                    setRoomsCount={setRoomsCount}
                />
                <Stores>
                    <a href={googlePlayUrl} target='_blank'>
                        <GooglePlayIcon>
                            <use href={svgIcons.googlePlay}/>
                        </GooglePlayIcon>
                    </a>
                    <a href={appleStoreUrl} target='_blank'>
                        <AppleStoreIcon>
                            <use href={svgIcons.appleStore}/>
                        </AppleStoreIcon>
                    </a>
                </Stores>
            </TopWrapper>
        </TopSectionTag>
    )
}

export default TopSection
