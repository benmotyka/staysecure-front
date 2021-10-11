import React from 'react'

import { Container, Section, List, Item, Link} from './Navbar.styles'

import Button from "components/Button/Button.js"
import Logo from "components/Logo/Logo.js"
const Navbar = () => {
    return (
        <Container>
            <Section><Logo/></Section>
            <Section>
                <List>
                    <Item>
                        <Link>Wiki</Link>
                    </Item>
                    <Item>
                        <Link>Login</Link>
                    </Item>
                    <Item><Button text="Rejestracja"/></Item>
                </List>
            </Section>
        </Container>
    )
}

export default Navbar
