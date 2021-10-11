import React from 'react'

import {Container, Section, Text} from "./Footer.styles"
const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container>
            <Section>
                <Text>{getYear()} &copy; staysecure</Text>
                <Text>Terms of Service</Text>
                <Text>Privacy Policy</Text>
                <Text>FAQ</Text>
            </Section>
            <Section>
            <Text>by Ben Motyka</Text>
            </Section>
        </Container>
    )
}

export default Footer
