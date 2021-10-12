import React from 'react'

import {Container, Section, Text, Link} from "./Footer.styles"
const RegisterFooter = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container noBackground>
            <Section>
                <Text>{getYear()} &copy; staysecure</Text>
            </Section>
            <Section>
                <Text>Masz już konto? <Link to="/login">Zaloguj się</Link></Text>
            </Section>
            <Section>
            <Text>by Ben Motyka</Text>
            </Section>
        </Container>
    )
}

export default RegisterFooter
