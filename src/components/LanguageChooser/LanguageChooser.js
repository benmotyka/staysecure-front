import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router'

import {Container, CountryIcon, DropdownWrapper, FlagsWrapper, FlagsItem} from "./LanguageChooser.styles.js"

const LanguageChooser = () => {
    const history = useHistory()
    const {i18n} = useTranslation()
    const [dropdownActive, setDropdownActive] = useState(false);

    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
      history.go(0)
    }
    return (
        <Container>
            <FlagsWrapper>
            {localStorage.getItem('i18nextLng') === 'pl' && <CountryIcon onClick={() => setDropdownActive(!dropdownActive)} src="flags/poland.png"/>}
            {localStorage.getItem('i18nextLng') === 'en' && <CountryIcon onClick={() => setDropdownActive(!dropdownActive)} src="flags/united-kingdom.png"/>}
            </FlagsWrapper>
            <DropdownWrapper active={dropdownActive}>
            {dropdownActive && <>
            {localStorage.getItem('i18nextLng') !== 'pl' && <FlagsItem><CountryIcon onClick={() => {changeLanguage("pl"); setDropdownActive(false)}} src="flags/poland.png"/></FlagsItem>}
            {localStorage.getItem('i18nextLng') !== 'en' && <FlagsItem><CountryIcon onClick={() => {changeLanguage("en"); setDropdownActive(false)}} src="flags/united-kingdom.png"/></FlagsItem>}
            </>}

            </DropdownWrapper>
        </Container>
    )
}

export default LanguageChooser
