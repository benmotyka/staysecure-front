import React from 'react'
import { useTranslation } from 'react-i18next'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const Footer = () => {
  const {t, i18n} = useTranslation()

    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container>
            <Section>
                <TextItem>{getYear()} &copy; staysecure</TextItem>
                <LinkItem to="/">{t('termsOfService')}</LinkItem>
                <LinkItem to="/">{t('privacyPolicy')}</LinkItem>
                <LinkItem to="/">{t('FAQ')}</LinkItem>
            </Section>
            <Section>
            <TextItem>by Ben Motyka</TextItem>
            </Section>
        </Container>
    )
}

export default Footer
