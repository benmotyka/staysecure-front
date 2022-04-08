import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  HeaderWrapper,
  Header,
  CategoriesWrapper,
  ItemsWrapper,
  Item,
  FaqInput,
  Category,
  Container,
  Question,
  Answer,
} from "./Faq.styles";

import faqData from './Faq.data'

const Faq = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("account");
  return (
    <Container>
      <HeaderWrapper>
        <Header>{t("faq.header")}</Header>
        <FaqInput placeholder={t("faq.inputPlaceholder")} type="text" />
      </HeaderWrapper>
      <CategoriesWrapper>
        <Category
          active={activeCategory === "account"}
          onClick={() => setActiveCategory("account")}
        >
          {t("faq.categories.account")}
        </Category>
        <Category
          active={activeCategory === "courses"}
          onClick={() => setActiveCategory("courses")}
        >
          {t("faq.categories.courses")}
        </Category>
        <Category
          active={activeCategory === "quizes"}
          onClick={() => setActiveCategory("quizes")}
        >
          {t("faq.categories.quizes")}
        </Category>
      </CategoriesWrapper>
      <ItemsWrapper>
        {faqData
          .filter((item) => item.category === activeCategory)
          .map((item, key) => (
            <Item key={key}>
              <Question>{item.question}</Question>
              <Answer>{item.answer}</Answer>
            </Item>
          ))}
      </ItemsWrapper>
    </Container>
  );
};

export default Faq;
