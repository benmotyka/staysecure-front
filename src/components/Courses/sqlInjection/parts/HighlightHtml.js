import React, { useEffect, useRef } from "react";
import Browser from "components/Browser/Browser.js";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-chaos";
import {Container, Wrapper, CodeWrapper, CodeHeaderContainer, CodeHeader, CodeIcon, PageBody} from '../styles.js'
import { useTranslation } from "react-i18next";


const HighlightHtml = (props) => {
  const {t} = useTranslation()

    useEffect(() => {
        props.setWaitForCorrectAnswer(true);
      }, []);

  const aceEditor = useRef(null);

  const getSelectedText = () => {
    if (aceEditor.current.editor.getSelectedText().includes("https://api/search")) {
      props.setWaitForCorrectAnswer(false);
    } else {
      props.setWaitForCorrectAnswer(true);
    }
  };

  const code = `<html>
    <head>
    <script>
    const form = document.getElementById("form")
    const input = document.getElementById("input")

    const search = (event) => {
        fetch("https://api/search", {
            method: 'GET',
            body: JSON.stringify({
                value: input.value
            })
        })
    }

    form.addEventListener('submit', search)
    </script>
    </head>
    <body>
        <form id="form">
        <h1>${t('courses.sql.onlineShop')}</h1>
        <label for="input">${t('courses.sql.enterProduct')}</label>
        <input id="input" name="input" />
        <br/>
        <button>${t('courses.sql.search')}</button>
        </form>
    </body>
  </html>
 
`;

  return (
    <Container>
        <Wrapper>
        <Browser>
          <PageBody>
            <h1>{t('courses.sql.onlineShop')}</h1>
            <label for="input">{t('courses.sql.enterProduct')}</label>
            <input disabled name="input" />
            <br />
            <button disabled>{t('courses.sql.search')}</button>
          </PageBody>
        </Browser>
        </Wrapper>
          <CodeWrapper>
              <CodeHeaderContainer>
              <CodeIcon/> <CodeHeader>{t('courses.sql.sourceCodePage')}</CodeHeader> 
              </CodeHeaderContainer>
        <AceEditor
          mode="html"
          ref={aceEditor}
          theme="chaos"
          value={code}
          fontSize={18}
          wrapEnabled={true}
          onCursorChange={getSelectedText}
          readOnly
          setAutoScroll
          style={{ width: '100%', height: '300px' }}
          showPrintMargin={false}
        />
        </CodeWrapper>
    </Container>
  );
};

export default HighlightHtml;
