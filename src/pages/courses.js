import Navbar from 'components/Navbar/Navbar'
import LatestCourses from 'components/PreviewItems/LatestCourses'
import AllCourses from 'components/PreviewItems/AllCourses'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
const courses = () => {
    return (
        <>
            <Navbar/>
            <PageWrapper>
            <LatestCourses/>
            <AllCourses/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default courses
