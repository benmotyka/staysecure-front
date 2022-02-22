import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { PageOneItemCentered } from 'components/Pages/Pages.styles'
import CoursePreviewWidget from 'components/CoursePreview/CoursePreview'

const CoursePreview = (props) => {
  return (
    <>
    <Navbar/>
    <PageOneItemCentered>
        <CoursePreviewWidget/>
    </PageOneItemCentered>
    <Footer/>
    </>
  )
}

export default CoursePreview