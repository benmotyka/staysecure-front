import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import Hero from 'components/Hero/Hero'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import Articles from 'components/PreviewItems/Articles'
import Courses from 'components/PreviewItems/Courses'

const home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <PageWrapper>
            <Courses header="Ostatnie kursy" quantity={3}/>
            <Articles header="Ostatnie artykuły" quantity={6}/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default home
