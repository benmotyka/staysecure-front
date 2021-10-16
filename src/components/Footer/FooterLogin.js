import React from 'react'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const LoginFooter = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container noBackground>
            <Section>
                <TextItem>{getYear()} &copy; staysecure</TextItem>
            </Section>
            <Section>
                <TextItem>Nie masz konta? <LinkItem orange to="/register">Zarejestruj się</LinkItem></TextItem>
            </Section>
            <Section>
            <TextItem>by Ben Motyka</TextItem>
            </Section>
        </Container>
    )
}

export default LoginFooter
