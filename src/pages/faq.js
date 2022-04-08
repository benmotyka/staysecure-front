import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { BlankPage } from 'components/Pages/Pages.styles'
import FaqWidget from "components/Faq/Faq"
import React from 'react'

const faq = () => {
    
  return (
    <>
    <Navbar/>
    <BlankPage>
    <FaqWidget/>
    </BlankPage>
    <Footer/>
    </>
  )
}

export default faq