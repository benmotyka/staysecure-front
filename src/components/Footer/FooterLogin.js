import React from 'react'
import { useTranslation } from 'react-i18next'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const LoginFooter = () => {
  const {t} = useTranslation()
    
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <Container noBackground>
            <Section>
                <TextItem>{getYear()} &copy; staysecure</TextItem>
            </Section>
            <Section>
                <TextItem>{t('dontHaveAccount')} <LinkItem orange to="/register">{t('registerNow')}</LinkItem></TextItem>
            </Section>
            <Section>
            <TextItem>by staysecure team</TextItem>
            </Section>
        </Container>
    )
}

export default LoginFooter
