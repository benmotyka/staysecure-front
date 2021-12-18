import React from "react";
import Browser from "components/Browser/Browser.js";
import {ContainerOneItem, WrapperOneItem, PageBody} from '../styles.js'

const Introduction = () => {

  return (
    <ContainerOneItem>
        <WrapperOneItem>
        <Browser>
          <PageBody>
            <h1>Sklep internetowy</h1>
            <label for="input">Wpisz nazwę produktu aby wyszukać:</label>
            <input disabled name="input" />
            <br />
            <button disabled>Wyszukaj</button>
          </PageBody>
        </Browser>
        </WrapperOneItem>
    </ContainerOneItem>
  );
};

export default Introduction;
