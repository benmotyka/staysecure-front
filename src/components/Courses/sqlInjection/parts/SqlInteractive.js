import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Browser from "../../Browser/Browser.js";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Wrapper = styled.div`
  padding: 25px;
`;

const PageBody = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SqlInteractive = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);

  const code = `const a = 0;
const b = 1;
const sql = "SELECT * FROM products p where p.name = '${search}'"
`;
  return (
    <Container>
      <Wrapper>
        <Browser>
          <PageBody>
            <h1>Sklep internetowy</h1>
            <label for="input">Wpisz nazwę produktu aby wyszukać:</label>
            <input
              name="input"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                if (search.match(/' or \d+=\d+ --/gi))
                  props.setWaitForCorrectAnswer(false);
                else props.setWaitForCorrectAnswer(true);
              }}
            >
              Wyszukaj
            </button>
          </PageBody>
        </Browser>
      </Wrapper>
      <Wrapper>
      <AceEditor
            mode="java"
            theme="dracula"
            value={code}
            fontSize={16}
            wrapEnabled={true}
            readOnly
        />
      </Wrapper>
    </Container>
  );
};

export default SqlInteractive;
