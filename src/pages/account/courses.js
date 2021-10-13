import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Account/Sidebar/Sidebar'
import StartedCoursesCard from 'components/Account/Cards/StartedCourses'
import {PageAccount, PageSection} from 'components/Pages/Pages.styles'
import NavbarAccount from 'components/Navbar/NavbarAccount'
import FinishedCoursesCard from 'components/Account/Cards/FinishedCourses'
const courses = () => {
    return (
        <>
            <NavbarAccount/>
            <PageAccount>
                <Sidebar/>
                <PageSection>
                    <StartedCoursesCard/>
                    <FinishedCoursesCard/>
                </PageSection>
            </PageAccount>
            <Footer/>
        </>
    )
}

export default courses
