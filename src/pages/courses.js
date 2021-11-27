import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import CoursesPreview from 'components/PreviewItems/Courses'
import { useTranslation } from 'react-i18next'

const Courses = () => {
  const {t, i18n} = useTranslation()

    return (
        <>
            <Navbar/>
            <PageWrapper>
            <CoursesPreview header={t('lastCourses')} quantity={3}/>
            <CoursesPreview header={t('allCourses')} />
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default Courses
