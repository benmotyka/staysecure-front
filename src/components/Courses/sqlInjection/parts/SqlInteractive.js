import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Browser from "../../Browser/Browser.js";
import AceEditor from "react-ace";
import colors from "constans/colors.js";
import {HiCode as Code} from "react-icons/hi"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Wrapper = styled.div`
height: 40%;
width: 79%;

`

const CodeWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const CodeHeaderContainer = styled.div`
height: 35px;
width: 1000px;
background-color: ${colors.darkestPurple};
margin: 0;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
`

const CodeHeader = styled.h2`
color: ${colors.orange};
font-size: 20px;
margin: 0;
`

const CodeIcon = styled(Code)`
font-size: 20px;
color: ${colors.orange};
`

const PageBody = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SqlInteractive = (props) => {
  const [search, setSearch] = useState("");
  const aceEditor = useRef(null);

  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);


const code = `
searchItem: async (args, req) => {
  await validateCaptcha(args.captchaToken);

  const search = '${search}'
  const sql = "SELECT * FROM products p where p.name = ${search}"
  const result = await sequelize.query(sql, {
    plain: false,
    raw: true,
    type: QueryTypes.SELECT
  });
  
  return result;
},
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
          height={400}
          width={1000}
          theme="github"
          value={code}
          fontSize={18}
          wrapEnabled={true}
          readOnly
        />
      </CodeWrapper>

    </Container>
  );
};

export default SqlInteractive;
