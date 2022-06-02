import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Container, Header } from "./PasswordChange.styles";
import {
  ErrorsWrapper,
  SuccessText,
  Error,
} from "components/Cards/Cards.styles";
import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import BasicInput from "components/BasicInput/BasicInput";
import { useGlobalLoader } from "store/actions/global";
import GlobalLoaderContext from "context/GlobalLoader.context";

const PasswordChange = (props) => {
  const { t } = useTranslation();

  const [success, setSuccess] = useState(false);

  const { startGlobalLoader, stopGlobalLoader } = useGlobalLoader();
  const onSubmit = ({ oldPassword, newPassword }, { setFieldError }) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          const requestBody = {
            query: `
            mutation ResetPassword($oldPassword: String!, $newPassword: String!, $captcha: String!){
                resetPassword(oldPassword: $oldPassword, newPassword: $newPassword, captchaToken: $captcha){
                  email
                }
              }
          `,
            variables: {
              oldPassword: oldPassword,
              newPassword: newPassword,
              captcha: token,
            },
          };
          try {
            startGlobalLoader("passwordChange");
            const {
              data: {
                data: { resetPassword: response },
              },
            } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
              headers: {
                Authorization: `Bearer ${props.user.token}`,
              },
            });
            if (response) {
              setSuccess(true);
            } else {
              setFieldError("oldPassword", t("errors.wrongPassword"));
              return;
            }
          } catch (error) {
            console.log(error);
          } finally {
            stopGlobalLoader("passwordChange");
          }
        });
    });
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required(t("errors.wrongPassword"))
        .min(5, t("errors.wrongPassword")),
      newPassword: Yup.string()
        .required(t("errors.wrongPassword"))
        .min(5, t("errors.wrongPassword")),
      newPasswordConfirmation: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], t("errors.passwordsMustMatch"))
        .required(t("errors.passwordsMustMatch")),
    }),
    onSubmit,
  });

  return (
      <Container>
        {success ? (
          <SuccessText>{t("passwordChangeSuccess")}</SuccessText>
        ) : (
        <GlobalLoaderContext>
            <Header>{t("passwordChange")}</Header>
            <BasicInput
              id="oldPassword"
              placeholder={t("oldPassword")}
              type="password"
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
              onBlur={formik.handleBlur}
            />
            <BasicInput
              id="newPassword"
              placeholder={t("newPassword")}
              type="password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              onBlur={formik.handleBlur}
            />
            <BasicInput
              id="newPasswordConfirmation"
              placeholder={t("confirmNewPassword")}
              type="password"
              onChange={formik.handleChange}
              value={formik.values.newPasswordConfirmation}
              onBlur={formik.handleBlur}
            />
            <ErrorsWrapper>
              {formik.touched.oldPassword && formik.errors.oldPassword ? (
                <Error>{formik.errors.oldPassword}</Error>
              ) : formik.touched.newPassword && formik.errors.newPassword ? (
                <Error>{formik.errors.newPassword}</Error>
              ) : formik.touched.newPasswordConfirmation &&
                formik.errors.newPasswordConfirmation ? (
                <Error>{formik.errors.newPasswordConfirmation}</Error>
              ) : null}
            </ErrorsWrapper>
            <div>
              <Button onClick={formik.handleSubmit} text={t("change")} />
            </div>
        </GlobalLoaderContext>
        )}
      </Container>
  );
};

export default PasswordChange;
