import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import {PageWrapperNoCentered} from 'components/Pages/Pages.styles'
import CoursesPreview from 'components/PreviewItems/Courses'
import { useTranslation } from 'react-i18next'

const Courses = () => {
  const {t} = useTranslation()

    return (
        <>
            <Navbar/>
            <PageWrapperNoCentered>
            <CoursesPreview header={t('allCourses')} />
            </PageWrapperNoCentered>
            <Footer/>
        </>
    )
}

export default Courses
