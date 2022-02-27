import Button from 'components/Button/Button'
import { useTranslation } from "react-i18next";
import React from 'react'

const RateCourse = () => {
  const {t} = useTranslation()

  return (
    <>
    <Button noArrow text={t('rateCourse')}/>
    </>
  )
}

export default RateCourse