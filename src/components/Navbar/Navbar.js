import { useHistory } from "react-router-dom";

import { Container, Section, List, Item, ButtonContainer, Link, } from './Navbar.styles'

import Button from "components/Button/Button.js"
import Logo from "components/Logo/Logo.js"
const Navbar = () => {
    const history = useHistory();

    return (
        <Container>
            <Section><Logo/></Section>
            <Section>
                <List>
                    <Item>
                        <Link to="/articles">Artykuły</Link>
                    </Item>
                    <Item>
                        <Link to="/courses">Kursy</Link>
                    </Item>
                    <Item>
                        <Link to="/login">Login</Link>
                    </Item>
                    <Item><ButtonContainer><Button onClick={() => {
                        history.push('/register')
                    }} text="Rejestracja"/></ButtonContainer></Item>
                </List>
            </Section>
        </Container>
    )
}

export default Navbar
