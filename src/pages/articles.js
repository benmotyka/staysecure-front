import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import Articles from 'components/PreviewItems/Articles'
import { useTranslation } from 'react-i18next'
const Wiki = () => {
  const { t } = useTranslation()
    return (
        <>
            <Navbar/>
            <PageWrapper>
            <Articles header={t('allArticles')}/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default Wiki
