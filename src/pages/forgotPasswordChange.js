import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { PageOneItemCentered } from "components/Pages/Pages.styles"
import ForgotPasswordChangeWidget from "components/Cards/ForgotPasswordChange"
const ForgotPasswordChange = (props) => {
  const token = props.match.params.token;
  return (
    <>
    <Navbar/>
    <PageOneItemCentered>
        <ForgotPasswordChangeWidget token={token}/>
    </PageOneItemCentered>
    <Footer/>
    </>
  )
}

export default ForgotPasswordChange