import { useState } from "react";
import axios from "axios";

import { Container, Header } from "./PasswordChange.styles";
import {
  Input,
  Wrapper,
  ErrorsWrapper,
  SuccessText,
  Error,
} from "components/Cards/Cards.styles";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { useTranslation } from "react-i18next";

const PasswordChange = (props) => {
  const {t} = useTranslation()

  const [passwordChangeData, setPasswordChangeData] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (field) => {
    return ({ target: { value } }) => {
      setPasswordChangeData((oldValues) => ({ ...oldValues, [field]: value }));
    };
  };
  const setError = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage();
    }, 2500);
  };

  const sendData = () => {
    if (
      !passwordChangeData.oldPassword ||
      !passwordChangeData.newPassword ||
      !passwordChangeData.newPasswordConfirmation ||
      passwordChangeData.newPassword.length < 5
    ) {
      setError(t('errors.wrong-login-password'));
      return;
    }
    if (
      passwordChangeData.newPassword !==
      passwordChangeData.newPasswordConfirmation
    ) {
      setError(t('errors.passwordsMustMatch'));
      return;
    }
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
              oldPassword: passwordChangeData.oldPassword,
              newPassword: passwordChangeData.newPassword,
              captcha: passwordChangeData.newPasswordConfirmation,
            },
          };
          try {
            const {
              data: { data: {resetPassword: response} },
            } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
              headers: {
                Authorization: `Bearer ${props.user.token}`,
              },
            });
            if (response) {
              setSuccess(true);
            } else {
              setError(t('errors.wrongPassword'));
            }
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        });
    });
  };
  return (
    <Container>
      {loading && <Loader />}
      {success ? (
        <SuccessText>{t('passwordChangeSuccess')}</SuccessText>
      ) : (
        <>
          <Header>{t('passwordChange')}</Header>
          <Input
            placeholder={t('oldPassword')}
            type="password"
            value={passwordChangeData.oldPassword}
            onChange={set("oldPassword")}
          />
          <Input
            placeholder={t('newPassword')}
            type="password"
            value={passwordChangeData.newPassword}
            onChange={set("newPassword")}
          />
          <Input
            placeholder={t('confirmNewPassword')}
            type="password"
            value={passwordChangeData.newPasswordConfirmation}
            onChange={set("newPasswordConfirmation")}
          />
          <ErrorsWrapper>
            <Error>{errorMessage}</Error>
          </ErrorsWrapper>
          <Button onClick={sendData} full text={t('change')} />
        </>
      )}
    </Container>
  );
};

export default PasswordChange;
