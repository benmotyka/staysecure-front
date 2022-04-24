import axios from "axios";
import Button from "components/Button/Button";
import Loader from "components/Loader/GlobalLoader";
import { useHistory } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Container,
  Error,
  ErrorsWrapper,
  Header,
  SuccessText,
} from "./Cards.styles";
import BasicInput from "components/BasicInput/BasicInput";

const ForgotPassword = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const { t } = useTranslation();

  const onSubmit = async ({ password }, { setFieldError }) => {
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (captchaToken) => {
          const requestBody = {
            query: `
  mutation ForgotPasswordChange($token: String!, $newPassword: String!, $captcha: String!){
      forgotPasswordChange(token: $token, password: $newPassword, captchaToken: $captcha){
      email
    }
  }
  `,
            variables: {
              token: props.token,
              newPassword: password,
              captcha: captchaToken,
            },
          };
          try {
            const response = await axios.post(
              `${window.env.API_URL}/graphql`,
              requestBody
            );
            if (response.data.errors) {
              setFieldError("password", t("errors.somethingWentWrong"));
              return;
            }
            setSuccess(true);
            setTimeout(() => {
              history.push("/login");
            }, 2000);
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
      password: "",
      passwordConfirmation: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      password: Yup.string()
        .required(t("errors.wrongPassword"))
        .min(5, t("errors.wrongPassword")),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], t("errors.passwordsMustMatch"))
        .required(t("errors.passwordsMustMatch")),
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
            <SuccessText>{t("passwordResetSuccess")}</SuccessText>
          ) : (
            <>
              <Header>{t("forgotPassword.enterNewPassword")}</Header>
              <BasicInput
                id="password"
                placeholder={t("password")}
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              <BasicInput
                id="passwordConfirmation"
                placeholder={t("confirmPassword")}
                type="password"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
                onBlur={formik.handleBlur}
              />
              <ErrorsWrapper>
                {formik.touched.password && formik.errors.password ? (
                  <Error>{formik.errors.password}</Error>
                ) : formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation ? (
                  <Error>{formik.errors.passwordConfirmation}</Error>
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
