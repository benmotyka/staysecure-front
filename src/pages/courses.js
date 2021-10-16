import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import Courses from 'components/PreviewItems/Courses'
const courses = () => {
    return (
        <>
            <Navbar/>
            <PageWrapper>
            <Courses header="Ostatnie kursy" quantity={3}/>
            <Courses header="Wszystkie kursy" />
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default courses
