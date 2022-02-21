import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import { useState, useEffect } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import {
  Container,
  Header,
  Input,
  Label,
  Wrapper,
  ErrorsWrapper,
  Error,
  LinkItem
} from "./Cards.styles";

import Button from "../Button/Button";
import Loader from "components/Loader/Loader";
import { useTranslation } from "react-i18next";
const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(selectUser);
    const {t} = useTranslation()

    useEffect(() => {
      if(user) history.push("/");
    },[])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const setError = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage();
    }, 2500);
  };

  const sendData = () => {
    if (!password || !email || password.length < 5 || !isEmail(email)) {
      setError(t('errors.wrong-login-password'));
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
          query Login($email: String!, $password: String!,$captcha: String!, $rememberMe: Boolean!){ 
            login(userInput: {email: $email, password: $password, captchaToken: $captcha, rememberMe: $rememberMe}) {
              userId
              name
              token
              tokenExpiration
              accountLevel
            }
          }  
          `,
            variables: {
              email: email,
              password: password,
              captcha: token,
              rememberMe: rememberMe,
            },
          };
          try {
            const {
              data: {
                data: { login: response },
              },
            } = await axios.post(`${window.env.API_URL}/graphql`, requestBody);
            if (response) {
              dispatch(
                login({
                  token: response.token,
                  userId: response.userId,
                  name: response.name,
                  accountLevel: response.accountLevel
                })
              );
              history.push("/my-account");
            } else {
              setError(t('errors.wrong-login-password'));
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
      {loading && <Loader />}
      <Header>{t('login')}</Header>
      <Input
        placeholder={t('email')}
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder={t('password')}
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Wrapper>
        <Input
          id="checkbox"
          type="checkbox"
          value={rememberMe}
          onClick={() => {
            setRememberMe(!rememberMe);
          }}
        />
        <Label htmlFor="checkbox">{t('rememberMe')}</Label>
      </Wrapper>
      <ErrorsWrapper>
        <Error>{errorMessage}</Error>
      </ErrorsWrapper>
      <Button onClick={sendData} text={t('login')} full />
      <Wrapper>
        <LinkItem to="/forgot-password">{t('forgotPassword.header')}</LinkItem>
      </Wrapper>
    </Container>
  );
};

export default Login;
