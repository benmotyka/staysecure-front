
import {Container, Header, MobileIcon, Description} from "./MobileAlert.styles"
import { useTranslation } from "react-i18next";

const MobileAlert = () => {
  const {t} = useTranslation()

    return (
        <>
        <Container>
            <MobileIcon/>
            <Header>{t('mobileAlertHeader')}</Header>
            <Description>{t('mobileAlertDescription')}</Description>
        </Container>
        </>
    )
}

export default MobileAlert
