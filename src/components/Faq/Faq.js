import React from "react";
import { useTranslation } from "react-i18next";

import {
  HeaderWrapper,
  Header,
  CategoriesWrapper,
  QuestionsWrapper,
  FaqInput,
} from "./Faq.styles";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderWrapper>
        <Header>{t("faq.header")}</Header>
          <FaqInput placeholder={t("faq.inputPlaceholder")} type="text" />
      </HeaderWrapper>
      <CategoriesWrapper>

      </CategoriesWrapper>
      <QuestionsWrapper></QuestionsWrapper>
    </>
  );
};

export default Faq;
