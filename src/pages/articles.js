import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import {PageWrapperNoCentered} from 'components/Pages/Pages.styles'
import Articles from 'components/PreviewItems/Articles'
import { useTranslation } from 'react-i18next'
const Wiki = () => {
  const { t } = useTranslation()
    return (
        <>
            <Navbar/>
            <PageWrapperNoCentered>
            <Articles header={t('allArticles')}/>
            </PageWrapperNoCentered>
            <Footer/>
        </>
    )
}

export default Wiki
