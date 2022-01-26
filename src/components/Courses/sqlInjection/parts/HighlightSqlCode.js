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
import { useTranslation } from "react-i18next";

const HighlightSqlCode = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
  const {t} = useTranslation()

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
            <h1>{t('courses.sql.onlineShop')}</h1>
            <label for="input">{t('courses.sql.enterProduct')}</label>
            <input name="input" disabled />
            <br />
            <button disabled>{t('courses.sql.search')}</button>
          </PageBody>
        </Browser>
      </Wrapper>
      <CodeWrapper>
        <CodeHeaderContainer>
          <CodeIcon />{" "}
          <CodeHeader>{t('courses.sql.sourceCode')}</CodeHeader>
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
