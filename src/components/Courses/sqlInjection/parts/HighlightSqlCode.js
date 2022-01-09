import React, { useEffect, useRef } from "react";
import Browser from "components/Browser/Browser.js";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import {
  Container,
  Wrapper,
  CodeWrapper,
  CodeHeaderContainer,
  CodeHeader,
  CodeIcon,
  PageBody,
} from "../styles.js";

const HighlightSqlCode = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);

  const aceEditor = useRef(null);

  const getSelectedText = () => {
    if (aceEditor.current.editor.getSelectedText().includes("args.value")) {
      props.setWaitForCorrectAnswer(false);
    } else {
      props.setWaitForCorrectAnswer(true);
    }
  };
  const code = `
searchItem: async (args, req) => {
  if (!req.isAuth) {
    throw new Error("unauthenticated");
  }

  const captcha = await axios.post('https://www.google.com/recaptcha/api/siteverify')
  if(!captcha.data.success || captcha.data.score <= 0.3){
      throw new Error("invalid-captcha");
  }

  const sql = \`SELECT * FROM products p where p.name = '\${args.value}'\`

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
            <input name="input" disabled />
            <br />
            <button disabled>Wyszukaj</button>
          </PageBody>
        </Browser>
      </Wrapper>
      <CodeWrapper>
        <CodeHeaderContainer>
          <CodeIcon />{" "}
          <CodeHeader>Kod źródłowy aplikacji serwerowej</CodeHeader>
        </CodeHeaderContainer>
        <AceEditor
          mode="javascript"
          ref={aceEditor}
          theme="chaos"
          value={code}
          fontSize={18}
          wrapEnabled={true}
          onCursorChange={getSelectedText}
          readOnly
          showPrintMargin={false}
          setAutoScroll
          style={{ width: "100%", height: "300px" }}
        />
      </CodeWrapper>
    </Container>
  );
};

export default HighlightSqlCode;
