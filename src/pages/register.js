import FooterRegister from 'components/Footer/FooterRegister'
import Logo from 'components/Logo/Logo'
import {PageOneChild} from 'components/Pages/Pages.styles'

import RegisterCard from 'components/Cards/Register'
const register = () => {
    return (
            <PageOneChild>
                <Logo/>
                <RegisterCard/>
                <FooterRegister/>
            </PageOneChild>
    )
}

export default register
