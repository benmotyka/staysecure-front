import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Account/Sidebar/Sidebar'
import SettingsCard from 'components/Account/Cards/Settings'
import {PageAccount, PageSection} from 'components/Pages/Pages.styles'
import NavbarAccount from 'components/Navbar/NavbarAccount'
const settings = () => {
    return (
        <>
            <NavbarAccount/>
            <PageAccount>
                <Sidebar/>
                <PageSection>
                <SettingsCard/>
                </PageSection>
            </PageAccount>
            <Footer/>
        </>
    )
}

export default settings
