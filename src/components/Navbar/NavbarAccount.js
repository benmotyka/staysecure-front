import { useHistory } from "react-router-dom";

import { Container, Section } from './Navbar.styles'

import Logo from "components/Logo/Logo.js"
const NavbarAccount = () => {

    return (
        <Container smallPadding>
            <Section><Logo/></Section>
        </Container>
    )
}

export default NavbarAccount
