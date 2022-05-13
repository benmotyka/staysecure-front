import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Container, Header } from "./PasswordChange.styles";
import Button from "components/Button/Button";
import Loader from "components/Loader/GlobalLoader";
import { useTranslation } from "react-i18next";
import BasicInput from "components/BasicInput/BasicInput";
import { Description } from "components/Cards/Cards.styles";

const DeleteAccount = (props) => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (
    { oldPassword, newPassword },
    { setFieldError }
  ) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          setLoading(true);
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
            setLoading(false);
          }
        });
    });
  };

  return (
    <Container>
          <Header>{t("deleteAccountHeader")}</Header>
          <Description>
              {t("deleteAccountDescription")}
          </Description>
          <div>
          <Button text={t("delete")} />
          </div>
    </Container>
  );
};

export default DeleteAccount;
