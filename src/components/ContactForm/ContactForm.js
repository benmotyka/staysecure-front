import React from "react";
import { useFormik } from "formik";

import { Container, InputWrapper, ErrorMessage, FormContent } from "./ContactForm.styles";
import { FaqInput } from "../Faq/Faq.styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Button from "components/Button/Button";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [sent, setSent] = useState(false)
  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      subject: "",
      content: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string()
        .required("Required"),
      content: Yup.string()
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <FaqInput
          id="email"
          placeholder={t("contactForm.emailPlaceholder")}
          onChange={formik.handleChange}
          value={formik.values.email}
          maxLength="25"
          onBlur={formik.handleBlur}
          type="text"
          disabled={user}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
      </InputWrapper>
      <InputWrapper>
        <FaqInput
          id="subject"
          placeholder={t("contactForm.subjectPlaceholder")}
          onChange={formik.handleChange}
          value={formik.values.subject}
          type="text"
        />
        {formik.touched.subject && formik.errors.subject ? (
          <ErrorMessage>{formik.errors.subject}</ErrorMessage>
        ) : null}
      </InputWrapper>
      <InputWrapper>
        <FormContent
          id="content"
          placeholder={t("contactForm.contentPlaceholder")}
          onChange={formik.handleChange}
          value={formik.values.content}
          type="text"
        />
        {formik.touched.content && formik.errors.content ? (
          <ErrorMessage>{formik.errors.content}</ErrorMessage>
        ) : null}
      </InputWrapper>
      <Button full text={t("contactForm.send")} />
    </Container>
  );
};

export default ContactForm;
