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
        {i18n.language === "pl" && (
          <CountryIcon
            onClick={() => setDropdownActive(!dropdownActive)}
            src="flags/poland.png"
          />
        )}
        {i18n.language === "en" && (
          <CountryIcon
            onClick={() => setDropdownActive(!dropdownActive)}
            src="flags/united-kingdom.png"
          />
        )}
      </FlagsWrapper>
      <FadeIn in={dropdownActive}>
        <DropdownWrapper>
          <>
            {i18n.language !== "pl" && (
              <FlagsItem>
                <CountryIcon
                  onClick={() => {
                    changeLanguage("pl");
                    setDropdownActive(false);
                  }}
                  src="flags/poland.png"
                />
              </FlagsItem>
            )}
            {i18n.language !== "en" && (
              <FlagsItem>
                <CountryIcon
                  onClick={() => {
                    changeLanguage("en");
                    setDropdownActive(false);
                  }}
                  src="flags/united-kingdom.png"
                />
              </FlagsItem>
            )}
          </>
        </DropdownWrapper>
      </FadeIn>
    </Container>
  );
};

export default LanguageChooser;
