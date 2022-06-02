import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import BasicInput from "components/BasicInput/BasicInput";
import Button from "components/Button/Button";
import GlobalLoaderContext from "context/GlobalLoader.context";
import { useGlobalLoader } from "store/actions/global";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Error,
  ErrorsWrapper,
  Header,
  SuccessText,
} from "./Cards.styles";

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const { startGlobalLoader, stopGlobalLoader } = useGlobalLoader();

  const { t, i18n } = useTranslation();

  const onSubmit = async ({ email }, { setFieldError }) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          const requestBody = {
            query: `
mutation ForgotPassword($email: String!, $captcha: String!, $language: String!){
forgotPassword(email: $email, captchaToken: $captcha, language: $language){
email
}
}
`,
            variables: {
              email,
              captcha: token,
              language: i18n.language,
            },
          };

          try {
            startGlobalLoader("forgotPassword");
            const response = await axios.post(
              `${window.env.API_URL}/graphql`,
              requestBody
            );
            if (response.data.errors) {
              setFieldError("email", t("errors.somethingWentWrong"));
              return;
            }
            setSuccess(true);
          } catch (error) {
            console.log(error);
          } finally {
            stopGlobalLoader("forgotPassword");
          }
        });
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("errors.wrongEmail"))
        .required(t("errors.wrongEmail")),
    }),
    onSubmit,
  });

  return (
    <GlobalLoaderContext>
      <Container>
        {success ? (
          <SuccessText>{t("forgotPassword.checkEmail")}</SuccessText>
        ) : (
          <>
            <Header>{t("forgotPassword.instructions")}</Header>
            <BasicInput
              id="email"
              placeholder={t("email")}
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <ErrorsWrapper>
              {formik.touched.email && formik.errors.email ? (
                <Error>{formik.errors.email}</Error>
              ) : null}
            </ErrorsWrapper>
            <Button
              onClick={formik.handleSubmit}
              text={t("forgotPassword.continue")}
              full
            />
          </>
        )}
      </Container>
    </GlobalLoaderContext>
  );
};

export default ForgotPassword;
