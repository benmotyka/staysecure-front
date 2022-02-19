import {Container} from "./Difficulty.styles"
import { useTranslation } from "react-i18next";

const Difficulty = (props) => {
  const {t} = useTranslation()

  return (
    <>
    {props.level === 1 ? <Container easy>{t('easy')}</Container> : null}
    {props.level === 2 ? <Container medium>{t('medium')}</Container> : null}
    {props.level === 3 ? <Container hard>{t('hard')}</Container> : null}
    </>
  )
}

export default Difficulty