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
  Text,
  Highlight,
} from "./Faq.styles";

import faqData from "./Faq.data";

const Faq = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("account");
  const [faqSearch, setFaqSearch] = useState("");
  const [searchFaqItems, setSearchFaqItems] = useState([]);

  const updateFaqSearch = (value) => {
    setFaqSearch(value);
    if (value.length <= 3) return;
    setSearchFaqItems(
      faqData.filter(
        (faqItem) =>
          faqItem.question.toLowerCase().includes(value) ||
          faqItem.answer.toLowerCase().includes(value)
      )
    );
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>{t("faq.header")}</Header>
        <FaqInput
          placeholder={t("faq.inputPlaceholder")}
          onChange={(e) => updateFaqSearch(e.target.value)}
          maxLength="25"
          type="text"
        />
      </HeaderWrapper>
      {faqSearch.length > 3 ? (
        <>
          <Text>
            {t("faq.searchResultsFor")} <Highlight>{faqSearch}</Highlight>
          </Text>
          <ItemsWrapper>
            {searchFaqItems
              .filter((item) => item.language === i18n.language)
              .map((item, key) => (
                <Item key={key}>
                  <Question>{item.question}</Question>
                  <Answer>{item.answer}</Answer>
                </Item>
              ))}
          </ItemsWrapper>
        </>
      ) : (
        <>
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
              .filter(
                (item) =>
                  item.language === i18n.language &&
                  item.category === activeCategory
              )
              .map((item, key) => (
                <Item key={key}>
                  <Question>{item.question}</Question>
                  <Answer>{item.answer}</Answer>
                </Item>
              ))}
          </ItemsWrapper>
        </>
      )}
    </Container>
  );
};

export default Faq;