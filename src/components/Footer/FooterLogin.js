import React from 'react'

import {Container, Section, Text, Link} from "./Footer.styles"
const LoginFooter = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container noBackground>
            <Section>
                <Text>{getYear()} &copy; staysecure</Text>
            </Section>
            <Section>
                <Text>Nie masz konta? <Link to="/register">Zarejestruj się</Link></Text>
            </Section>
            <Section>
            <Text>by Ben Motyka</Text>
            </Section>
        </Container>
    )
}

export default LoginFooter
