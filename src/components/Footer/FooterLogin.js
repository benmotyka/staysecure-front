import React from 'react'
import { useTranslation } from 'react-i18next'

import {Container, Section, TextItem, LinkItem} from "./Footer.styles"
const LoginFooter = () => {
  const {t} = useTranslation()
    
    return (
        <Container noBackground oneItem>
            <Section>
                <TextItem>{t('dontHaveAccount')} <LinkItem orange to="/register">{t('registerNow')}</LinkItem></TextItem>
            </Section>
        </Container>
    )
}

export default LoginFooter
