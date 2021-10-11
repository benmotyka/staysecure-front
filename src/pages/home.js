import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import Hero from 'components/Hero/Hero'
import LatestCourses from 'components/LatestItems/LatestCourses'
import LatestArticles from 'components/LatestItems/LatestArticles'
import Footer from 'components/Footer/Footer'
const home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <LatestCourses/>
            <LatestArticles/>
            <Footer/>
        </>
    )
}

export default home
