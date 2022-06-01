import Logo from 'components/Logo/Logo'
import {PageOneChild} from 'components/Pages/Pages.styles'

import RegisterCard from 'components/Cards/Register'
const register = () => {
    return (
            <PageOneChild>
                <Logo/>
                <RegisterCard/>
            </PageOneChild>
    )
}

export default register
