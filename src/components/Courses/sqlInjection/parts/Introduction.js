import React from "react";
import Browser from "components/Browser/Browser.js";
import {ContainerOneItem, WrapperOneItem, PageBody} from '../styles.js'
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const {t} = useTranslation()

  return (
    <ContainerOneItem>
        <WrapperOneItem>
        <Browser>
          <PageBody>
            <h1>{t('courses.sql.onlineShop')}</h1>
            <label for="input">{t('courses.sql.enterProduct')}</label>
            <input disabled name="input" />
            <br />
            <button disabled>{t('courses.sql.search')}</button>
          </PageBody>
        </Browser>
        </WrapperOneItem>
    </ContainerOneItem>
  );
};

export default Introduction;
