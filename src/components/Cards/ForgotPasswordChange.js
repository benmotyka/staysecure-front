import axios from "axios";
import Button from "components/Button/Button";
import Loader from "components/Loader/GlobalLoader";
import { useHistory } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Container, Error, ErrorsWrapper, Header, Input, SuccessText } from "./Cards.styles";

const ForgotPassword = (props) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const setError = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage();
    }, 2500);
  };
  const { t } = useTranslation();

  const sendData = async () => {
    if (password !== password2) {
      setError(t("errors.passwordsMustMatch"));
      return;
    }
    if (password.length < 5) {
        setError(t("errors.wrongPassword"));
        return;
    }
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
              setError(t("errors.somethingWentWrong"));
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
              <Input
                placeholder={t("password")}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder={t("confirmPassword")}
                value={password2}
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
              />
              <ErrorsWrapper>
                <Error>{errorMessage}</Error>
              </ErrorsWrapper>
              <Button
                onClick={sendData}
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
