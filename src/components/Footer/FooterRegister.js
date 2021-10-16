import React from 'react'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const RegisterFooter = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container noBackground>
            <Section>
                <TextItem>{getYear()} &copy; staysecure</TextItem>
            </Section>
            <Section>
                <TextItem>Masz już konto? <LinkItem orange to="/login">Zaloguj się</LinkItem></TextItem>
            </Section>
            <Section>
            <TextItem>by Ben Motyka</TextItem>
            </Section>
        </Container>
    )
}

export default RegisterFooter
