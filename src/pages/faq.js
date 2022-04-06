import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { PageOneChild } from 'components/Pages/Pages.styles'
import FaqWidget from "components/Faq/Faq"
import React from 'react'

const faq = () => {
    
  return (
    <>
    <Navbar/>
    <PageOneChild>
    <FaqWidget/>
    </PageOneChild>
    <Footer/>
    </>
  )
}

export default faq