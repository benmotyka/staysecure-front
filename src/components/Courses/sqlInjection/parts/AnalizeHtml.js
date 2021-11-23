import React from "react";
import styled from "styled-components";
import Browser from "../../Browser/Browser.js";
import AceEditor from "react-ace";
import colors from "constans/colors.js";
import {HiCode as Code} from "react-icons/hi"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

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

const AnalizeHtml = () => {

  const code = `<html>
    <head>
    <script>
    const form = document.getElementById("form")
    const input = document.getElementById("input")

    const search = async (event) => {
        fetch("https://api/login", {
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
        <h1>Sklep internetowy</h1>
        <label for="input">Wpisz nazwę produktu aby wyszukać:</label>
        <input id="input" name="input" />
        <br/>
        <button>Wyszukaj</button>
        </form>
    </body>
  </html>
 
`;

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
          <CodeWrapper>
              <CodeHeaderContainer>
              <CodeIcon/> <CodeHeader>Kod źródłowy</CodeHeader> 
              </CodeHeaderContainer>
        <AceEditor
          mode="javascript"
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

export default AnalizeHtml;
