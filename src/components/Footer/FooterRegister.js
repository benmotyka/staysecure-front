import React from 'react'
import { useTranslation } from 'react-i18next'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const RegisterFooter = () => {
  const {t} = useTranslation()

    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container noBackground>
            <Section>
                <TextItem>{t('alreadyHaveAccount')} <LinkItem orange to="/login">{t('login')}</LinkItem></TextItem>
            </Section>
        </Container>
    )
}

export default RegisterFooter
