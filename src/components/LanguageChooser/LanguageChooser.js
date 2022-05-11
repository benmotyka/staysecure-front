import FadeIn from "components/FadeIn/FadeIn.js";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

import {
  Container,
  CountryIcon,
  DropdownWrapper,
  FlagsWrapper,
  FlagsItem,
} from "./LanguageChooser.styles.js";

const languages = {
  pl: {
    iconFile: "poland.png",
  },
  en: {
    iconFile: "united-kingdom.png",
  },
};

const LanguageChooser = () => {
  const history = useHistory();
  const { i18n } = useTranslation();
  const [dropdownActive, setDropdownActive] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    history.go(0);
  };

  return (
    <Container>
      <FlagsWrapper>
        {}
        <CountryIcon
          onClick={() => setDropdownActive(!dropdownActive)}
          src={`flags/${languages[i18n.language].iconFile}`}
        />
      </FlagsWrapper>
      <FadeIn in={dropdownActive}>
        <DropdownWrapper>
          <>
            {Object.keys(languages)
              .filter((lang) => lang !== i18n.language)
              .map((item) => (
                <FlagsItem>
                  <CountryIcon
                    onClick={() => {
                      changeLanguage(item);
                      setDropdownActive(false);
                    }}
                    src={`flags/${languages[item].iconFile}`}
                  />
                </FlagsItem>
              ))}
          </>
        </DropdownWrapper>
      </FadeIn>
    </Container>
  );
};

export default LanguageChooser;
