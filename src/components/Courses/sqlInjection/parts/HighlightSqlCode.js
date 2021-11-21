import React, { useState, useEffect, useRef } from "react";
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
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);

  const aceEditor = useRef(null);

  const getSelectedText = () => {
    if (aceEditor.current.editor.getSelectedText().includes("FROM")) {
      props.setWaitForCorrectAnswer(false);
    } else {
      props.setWaitForCorrectAnswer(true);
    }
  };
  const code = `const a = 0;
const b = 1;
const sql = "SELECT * FROM products p where p.name = ''"
`;

  return (
    <Container>
      <Wrapper>
        <Browser>
          <PageBody>
            <h1>Sklep internetowy</h1>
            <label for="input">Wpisz nazwę produktu aby wyszukać:</label>
            <input name="input" disabled />
            <br />
            <button disabled>Wyszukaj</button>
          </PageBody>
        </Browser>
      </Wrapper>
      <Wrapper>
        {/* <CodeMirror
          value={code}
          extensions={[javascript({ jsx: true })]}
        /> */}
        <AceEditor
          ref={aceEditor}
          mode="java"
          theme="dracula"
          value={code}
          fontSize={16}
          wrapEnabled={true}
          onCursorChange={getSelectedText}
          readOnly
        />
      </Wrapper>
    </Container>
  );
};

export default SqlInteractive;
