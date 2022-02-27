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
                <LinkItem to="/articles">{t('header.articles')}</LinkItem>
                <LinkItem to="/courses">{t('header.courses')}</LinkItem>
            </Section>
            <Section>
            <TextItem>by staysecure team</TextItem>
            </Section>
        </Container>
    )
}

export default Footer
