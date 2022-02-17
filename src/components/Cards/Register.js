import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

import axios from "axios";
import isEmail from "validator/lib/isEmail";

import {
  Container,
  Header,
  Input,
  ErrorsWrapper,
  Error,
  SuccessText,
} from "./Cards.styles";
import Loader from "components/Loader/Loader";
import AccountLevel from "components/Account/Cards/Parts/AccountLevel";

import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
const Register = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const { t } = useTranslation();

  const [registrationData, setRegistrationData] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
    accountLevel: "basic",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user) history.push("/");
  }, []);

  const set = (field) => {
    return ({ target: { value } }) => {
      setRegistrationData((oldValues) => ({ ...oldValues, [field]: value }));
    };
  };

  const setError = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage();
    }, 2500);
  };

  const sendData = () => {
    console.log(registrationData);
    if (
      !registrationData.password ||
      !registrationData.email ||
      !registrationData.name ||
      registrationData.password.length < 5 ||
      !isEmail(registrationData.email)
    ) {
      setError(t("errors.wrong-email-name-password"));
      return;
    }
    if (registrationData.password !== registrationData.passwordConfirmation) {
      setError(t("errors.passwordsMustMatch"));
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          const requestBody = {
            query: `
          mutation Register($email: String!, $password: String!, $name: String!, $captcha: String!, $accountLevel: String!){
            register(email: $email, password: $password, name: $name, captchaToken: $captcha, accountLevel: $accountLevel) {
                email
            }
          }   
          `,
            variables: {
              email: registrationData.email,
              password: registrationData.password,
              name: registrationData.name,
              captcha: token,
              accountLevel: registrationData.accountLevel,
            },
          };
          try {
            const {
              data: {
                data: { register: response },
              },
            } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
            console.log(response);
            if (response) {
              setSuccess(true);
            } else {
              setError(t("errors.userExists"));
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
      {loading ? (
        <Loader />
      ) : success ? (
        <SuccessText>
          {t("registerSuccessfulEmailSent")} {registrationData.email}
        </SuccessText>
      ) : (
        <>
          <Header>{t("register")}</Header>
          <Input
            placeholder={t("email")}
            type="email"
            autocomplete="off"
            value={registrationData.email}
            onChange={set("email")}
          ></Input>
          <Input
            placeholder={t("userName")}
            autocomplete="off"
            value={registrationData.name}
            onChange={set("name")}
          ></Input>
          <Input
            placeholder={t("password")}
            type="password"
            autocomplete="off"
            value={registrationData.password}
            onChange={set("password")}
          ></Input>
          <Input
            placeholder={t("confirmPassword")}
            type="password"
            autocomplete="off"
            value={registrationData.passwordConfirmation}
            onChange={set("passwordConfirmation")}
          ></Input>
          <AccountLevel
            small
            data={registrationData.accountLevel}
            onClick={setRegistrationData}
          />
          <ErrorsWrapper>
            <Error>{errorMessage}</Error>
          </ErrorsWrapper>
          <Button onClick={sendData} text={t("register")} full />
        </>
      )}
    </Container>
  );
};

export default Register;
