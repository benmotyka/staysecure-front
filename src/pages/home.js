import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import Hero from 'components/Hero/Hero'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import Articles from 'components/PreviewItems/Articles'
import Courses from 'components/PreviewItems/Courses'
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t, i18n} = useTranslation()

    return (
        <>
            <Navbar/>
            <Hero/>
            <PageWrapper>
            <Courses header={t('lastCourses')} quantity={3}/>
            <Articles header={t('lastArticles')} quantity={6}/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default Home
