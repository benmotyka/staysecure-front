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
          Konto
        </Category>
        <Category
          active={activeCategory === "courses"}
          onClick={() => setActiveCategory("courses")}
        >
          Kursy
        </Category>
        <Category
          active={activeCategory === "quizes"}
          onClick={() => setActiveCategory("quizes")}
        >
          Quizy
        </Category>
      </CategoriesWrapper>
      <ItemsWrapper>
        <Item>
          <Question>Pytanie numer jeden?</Question>
          <Answer>Lorem ipsum at fdad sadj ald</Answer>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

export default Faq;
