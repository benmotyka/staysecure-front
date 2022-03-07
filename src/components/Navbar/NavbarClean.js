import { useHistory } from "react-router-dom";

import { ContainerClean, Section } from './Navbar.styles'

import Logo from "components/Logo/Logo.js"
const NavbarClean = () => {

    return (
        <ContainerClean smallPadding>
            <Section><Logo/></Section>
        </ContainerClean>
    )
}

export default NavbarClean
