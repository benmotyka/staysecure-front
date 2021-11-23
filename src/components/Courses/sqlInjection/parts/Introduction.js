import React from "react";
import styled from "styled-components";
import Browser from "../../Browser/Browser.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
height: 90%;
width: 80%;
`
const PageBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Introduction = () => {

  return (
    <Container>
        <Wrapper>
        <Browser>
          <PageBody>
            <h1>Sklep internetowy</h1>
            <label for="input">Wpisz nazwę produktu aby wyszukać:</label>
            <input disabled name="input" />
            <br />
            <button disabled>Wyszukaj</button>
          </PageBody>
        </Browser>
        </Wrapper>
    </Container>
  );
};

export default Introduction;
