import axios from "axios";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import isEmail from "validator/lib/isEmail";

import { Container, Error, ErrorsWrapper, Header, Input, SuccessText } from "./Cards.styles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setError = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage();
    }, 2500);
  };
  const { t } = useTranslation();

  const sendData = async () => {
    if (!isEmail(email)) {
      setError(t("errors.wrongEmail"));
      return;
    }
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          const requestBody = {
            query: `
mutation ForgotPassword($email: String!, $captcha: String!){
forgotPassword(email: $email, captchaToken: $captcha){
email
}
}
`,
            variables: {
              email: email,
              captcha: token,
            },
          };

          try {
            const response = await axios.post(
              `${window.env.API_URL}/graphql`,
              requestBody
            );
            console.log(response);
            console.log("VVVVVVVVVVVVVVVVVVVVVVVVV");
            if (response.data.errors) {
              setError(t("errors.somethingWentWrong"));
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
              <Input
                placeholder={t("email")}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
