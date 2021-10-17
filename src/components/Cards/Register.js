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
  SuccessText
} from "./Cards.styles";
import Loader from "components/Loader/Loader";

import Button from "../Button/Button";
const Register = () => {
  const history = useHistory();
  const user = useSelector(selectUser);

  const [registrationData, setRegistrationData] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(user) history.push("/");
  },[])

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
    if (!registrationData.password || !registrationData.email || !registrationData.name || registrationData.password.length < 5 || !isEmail(registrationData.email)) {
      setError("Błędny email, nazwa lub hasło");
      return;
    }
    if(registrationData.password !== registrationData.passwordConfirmation) {
        setError("Hasła muszą się zgadzać");
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
          mutation Register($email: String!, $password: String!, $name: String!, $captcha: String!){
            register(email: $email, password: $password, name: $name, captchaToken: $captcha) {
                email
            }
          }   
          `,
          variables: {
            email: registrationData.email,
            password: registrationData.password,
            name: registrationData.name,
            captcha: token,
          },
          };
          try {
            const {data: {data: {register: response}}} = await axios.post(`http://localhost:8081/graphql`, requestBody);
            console.log(response)
            if (response) {
                setSuccess(true)
            } else {
                setError("Użytkownik istnieje");
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
      {success ? (<SuccessText>Email z linkiem weryfikacyjnym został wysłany na adres email: {registrationData.email}</SuccessText>) : (
          <>
      <Header>Rejestracja</Header>
      <Input
        placeholder="Email"
        type="email"
        autocomplete="off"
        value={registrationData.email}
        onChange={set("email")}
      ></Input>
      <Input
        placeholder="Nazwa użytkownika"
        autocomplete="off"
        value={registrationData.name}
        onChange={set("name")}
      ></Input>
      <Input
        placeholder="Hasło"
        type="password"
        autocomplete="off"
        value={registrationData.password}
        onChange={set("password")}
      ></Input>
      <Input
        placeholder="Potwierdź hasło"
        type="password"
        autocomplete="off"
        value={registrationData.passwordConfirmation}
        onChange={set("passwordConfirmation")}
      ></Input>
      <ErrorsWrapper>
        <Error>{errorMessage}</Error>
      </ErrorsWrapper>
      <Button  onClick={sendData} text="Zarejestruj" full/>
      </>
      )}
    </Container>
  );
};

export default Register;
