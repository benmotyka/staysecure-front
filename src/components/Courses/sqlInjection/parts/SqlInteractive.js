import React, { useEffect, useRef, useState } from "react";
import Browser from "../../Browser/Browser.js";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import {Container, Wrapper, CodeWrapper, CodeHeaderContainer, CodeHeader, CodeIcon, PageBody} from './Styles.js'

const SqlInteractive = (props) => {
  const [search, setSearch] = useState("");
  const aceEditor = useRef(null);

  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);


const code = `
searchItem: async (args, req) => {
  const sql = \`SELECT * FROM products p where p.name = '${search}'\`

  return await sequelize.query(sql, {
    type: QueryTypes.SELECT
  });
}
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
      <CodeWrapper>
              <CodeHeaderContainer>
              <CodeIcon/> <CodeHeader>Kod źródłowy aplikacji serwerowej</CodeHeader> 
              </CodeHeaderContainer>
              <AceEditor
          mode="javascript"
          ref={aceEditor}
          theme="chaos"
          value={code}
          fontSize={18}
          wrapEnabled={true}
          readOnly
          showPrintMargin={false}
          setAutoScroll
          style={{ width: '100%', height: '300px' }}
        />
      </CodeWrapper>

    </Container>
  );
};

export default SqlInteractive;
