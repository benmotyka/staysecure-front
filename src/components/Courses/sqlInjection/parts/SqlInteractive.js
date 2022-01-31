import React, { useEffect, useRef, useState } from "react";
import Browser from "components/Browser/Browser.js";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import { useTranslation } from "react-i18next";

import {
  Container,
  Wrapper,
  CodeWrapper,
  CodeHeaderContainer,
  CodeHeader,
  CodeIcon,
  PageBody,
} from "../styles.js";

const SqlInteractive = (props) => {
  const [search, setSearch] = useState("Laptop");
  const aceEditor = useRef(null);
  const {t} = useTranslation()

  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);

  const code = `
searchItem: async (args, req) => {
  if (!req.isAuth) {
    throw new Error("unauthenticated");
  }

  const captcha = await axios.post('https://www.google.com/recaptcha/api/siteverify')
  if(!captcha.data.success || captcha.data.score <= 0.3){
      throw new Error("invalid-captcha");
  }

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
            <h1>{t('courses.sql.onlineShop')}</h1>
            <label for="input">{t('courses.sql.enterProduct')}</label>
            <input
              name="input"
              value={search}
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
              {t('courses.sql.search')}
            </button>
          </PageBody>
        </Browser>
      </Wrapper>
      <CodeWrapper>
        <CodeHeaderContainer>
          <CodeIcon />{" "}
          <CodeHeader>{t('courses.sql.sourceCodeApi')}</CodeHeader>
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
          style={{ width: "100%", height: "300px" }}
        />
      </CodeWrapper>
    </Container>
  );
};

export default SqlInteractive;
