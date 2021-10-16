import React from 'react'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container>
            <Section>
                <TextItem>{getYear()} &copy; staysecure</TextItem>
                <LinkItem to="/">Warunki usługi</LinkItem>
                <LinkItem to="/">Polityka prywatności</LinkItem>
                <LinkItem to="/">FAQ</LinkItem>
            </Section>
            <Section>
            <TextItem>by Ben Motyka</TextItem>
            </Section>
        </Container>
    )
}

export default Footer
