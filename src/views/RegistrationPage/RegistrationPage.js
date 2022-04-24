import TopSectionIcons from "../TopSection/TopSectionIcons/TopSectionIcons";
import Header from "../TopSection/Header/Header";
import FormReg from "./FormReg/FormReg";

function RegistrationPage () {
    return (
        <section className='topSection'>
            <TopSectionIcons />
            <Header/>
            <FormReg />
        </section>
    )
}

export default RegistrationPage
