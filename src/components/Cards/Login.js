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
} from "./Cards.styles";

import Button from "../Button/Button";
import Loader from "components/Loader/Loader";
const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(selectUser);

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
      setError("Błędny login lub hasło");
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
            } = await axios.post(`http://localhost:8081/graphql`, requestBody);
            if (response) {
              dispatch(
                login({
                  token: response.token,
                  userId: response.userId,
                  name: response.name
                })
              );
              history.push("/my-account");
            } else {
              setError("Błędny login lub hasło");
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
      <Header>Logowanie</Header>
      <Input
        placeholder="Email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Hasło"
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
        <Label htmlFor="checkbox">Zapamiętaj mnie</Label>
      </Wrapper>
      <ErrorsWrapper>
        <Error>{errorMessage}</Error>
      </ErrorsWrapper>
      <Button onClick={sendData} text="Logowanie" full />
    </Container>
  );
};

export default Login;