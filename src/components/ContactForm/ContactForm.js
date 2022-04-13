import React from 'react'

import {Container} from "./ContactForm.styles"
import {FaqInput} from "../Faq/Faq.styles"
import { useState } from 'react';
import { useTranslation } from "react-i18next";


const ContactForm = () => {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");

  return (
    <Container>
      <FaqInput
          placeholder={t("contactForm.emailPlaceholder")}
          onChange={(e) => setEmail(e.target.value)}
          maxLength="25"
          type="text"
        />
    </Container>
  )
}

export default ContactForm