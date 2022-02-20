import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { PageOneItemCentered } from "components/Pages/Pages.styles"
import ForgotPasswordWidget from "components/Cards/ForgotPassword"
const ForgotPassword = () => {
  return (
    <>
    <Navbar/>
    <PageOneItemCentered>
        <ForgotPasswordWidget/>
    </PageOneItemCentered>
    <Footer/>
    </>
  )
}

export default ForgotPassword