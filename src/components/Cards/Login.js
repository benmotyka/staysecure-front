import { useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import queryString from "query-string";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";

import {
  Container,
  Header,
  Label,
  Wrapper,
  ErrorsWrapper,
  Error,
  LinkItem,
} from "./Cards.styles";

import Button from "../Button/Button";
import Loader from "components/Loader/GlobalLoader";
import { useTranslation } from "react-i18next";
import BasicInput from "components/BasicInput/BasicInput";
import { useLogin } from "store/actions/user";
const Login = () => {
  const { loginUser, userDetails } = useLogin()
  const history = useHistory();
  const { t } = useTranslation();
  const { search } = useLocation();

  useEffect(() => {
    if (userDetails.token) history.push("/");
  }, []);
  const [loading, setLoading] = useState(false);

  const onSubmit = ({ email, password, rememberMe }, { setFieldError }) => {
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
              email
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
              loginUser(response)
              const query = queryString.parse(search);
              if (query.courseRedirect)
                return history.push(`/course/${query.courseRedirect}`);
              return history.push("/account/courses");
            } else {
              setFieldError("email", t("errors.wrongLoginPassword"));
            }
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
      email: "",
      password: "",
      rememberMe: false,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("errors.wrongLoginPassword"))
        .required(t("errors.wrongLoginPassword")),
      password: Yup.string()
        .required(t("errors.wrongLoginPassword"))
        .min(5, t("errors.wrongLoginPassword")),
      rememberMe: Yup.boolean(),
    }),
    onSubmit,
  });

  return (
    <Container>
      {loading && <Loader />}
      <Header>{t("login")}</Header>
      <BasicInput
        id="email"
        placeholder={t("email")}
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      <BasicInput
        id="password"
        placeholder={t("password")}
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      <Wrapper>
        <BasicInput
          id="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.rememberMe}
          onBlur={formik.handleBlur}
        />
        <Label htmlFor="rememberMe">{t("rememberMe")}</Label>
      </Wrapper>
      <ErrorsWrapper>
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
      </ErrorsWrapper>
      <Button onClick={formik.handleSubmit} text={t("login")} full />
      <Wrapper>
        <LinkItem to="/forgot-password">{t("forgotPassword.header")}</LinkItem>
      </Wrapper>
    </Container>
  );
};

export default Login;
