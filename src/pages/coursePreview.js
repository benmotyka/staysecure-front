import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { PageOneItemCentered } from 'components/Pages/Pages.styles'
import CoursePreviewWidget from 'components/CoursePreview/CoursePreview'

const CoursePreview = (props) => {
  const courseName = props.match.params.courseName;

  return (
    <>
    <Navbar/>
    <PageOneItemCentered>
        <CoursePreviewWidget 
        courseName={courseName}
        />
    </PageOneItemCentered>
    <Footer/>
    </>
  )
}

export default CoursePreview