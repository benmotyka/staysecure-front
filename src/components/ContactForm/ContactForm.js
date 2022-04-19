import React from "react";
import { useFormik } from "formik";

import {
  Container,
  ButtonWrapper,
  ErrorMessage,
  FormContent,
} from "./ContactForm.styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Button from "components/Button/Button";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import LocalLoader from "components/Loader/LocalLoader";
import { SuccessText } from "components/Cards/Cards.styles";
import axios from "axios";
import BasicInput from "components/BasicInput/BasicInput";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      subject: "",
      content: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("errors.wrongEmail"))
        .required(t("errors.fieldRequired")),
      subject: Yup.string().required(t("errors.fieldRequired")),
      content: Yup.string().required(t("errors.fieldRequired")),
    }),
    onSubmit: async (values) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
            action: "submit",
          })
          .then(async (token) => {
            setLoading(true);
            const requestBody = {
              query: `
            query SendContactMessage($email: String!, $subject: String!,$content: String!, $captcha: String!){ 
              sendContactMessage(email: $email, subject: $subject, content: $content, captchaToken: $captcha) {
                resultStatus
              }
            }  
            `,
              variables: {
                email: values.email,
                subject: values.subject,
                content: values.content,
                captcha: token,
              },
            };
            try {
              await axios.post(
                `${window.env.API_URL}/graphql`,
                requestBody
              );
            } catch (error) {
              console.log(error);
            } finally {
              setSent(true);
              setLoading(false);
            }
          });
      });
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      {loading ? (
        <LocalLoader />
      ) : sent ? (
        <SuccessText>{t("contactForm.messageSent")}</SuccessText>
      ) : (
        <>
            <BasicInput
              id="email"
              placeholder={t("contactForm.emailPlaceholder")}
              onChange={formik.handleChange}
              value={formik.values.email}
              maxLength="25"
              onBlur={formik.handleBlur}
              type="text"
              disabled={user}
              fullWidth
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}
            <BasicInput
              id="subject"
              placeholder={t("contactForm.subjectPlaceholder")}
              onChange={formik.handleChange}
              value={formik.values.subject}
              type="text"
              fullWidth
            />
            {formik.touched.subject && formik.errors.subject ? (
              <ErrorMessage>{formik.errors.subject}</ErrorMessage>
            ) : null}
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
          <ButtonWrapper>
          <Button full text={t("contactForm.send")} />
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
};

export default ContactForm;
