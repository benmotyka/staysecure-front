import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import BasicInput from "components/BasicInput/BasicInput";
import Button from "components/Button/Button";
import Loader from "components/Loader/GlobalLoader";
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { t, i18n } = useTranslation();

  const onSubmit = async ({ email }, { setFieldError }) => {
    setLoading(true);
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
            setLoading(false);
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
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default ForgotPassword;
