import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import Articles from 'components/PreviewItems/Articles'
const wiki = () => {
    return (
        <>
            <Navbar/>
            <PageWrapper>
            <Articles header="Ostatnie artykuły" quantity={6}/>
            <Articles header="Wszystkie artykuły"/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default wiki
