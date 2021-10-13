import Navbar from 'components/Navbar/Navbar'
import LatestArticles from 'components/PreviewItems/LatestArticles'
import AllArticles from 'components/PreviewItems/AllArticles'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
const wiki = () => {
    return (
        <>
            <Navbar/>
            <PageWrapper>
            <LatestArticles/>
            <AllArticles/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default wiki
