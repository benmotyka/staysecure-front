import FooterLogin from 'components/Footer/FooterLogin'
import Logo from 'components/Logo/Logo'
import {PageOneChild} from 'components/Pages/Pages.styles'

import LoginCard from 'components/Cards/Login'

const Login = () => {
    return (
            <PageOneChild>
                <Logo/>
                <LoginCard/>
                <FooterLogin/>
            </PageOneChild>
    )
}

export default Login
