import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Container, Header } from "./PasswordChange.styles";
import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import BasicInput from "components/BasicInput/BasicInput";
import {
  Description,
  DeleteAccountModalWrapper,
  DeleteAccountButtonsWrapper,
  ErrorsWrapper,
  Error,
} from "components/Cards/Cards.styles";
import Modal from "components/Modal/Modal";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useLogin } from "store/actions/user";

const DeleteAccount = (props) => {
  const ref = useRef();
  const { t } = useTranslation();
  const { logoutUser } = useLogin()

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useOnClickOutside(ref, () => setShowModal(false));

  const onSubmit = ({ password }, { setFieldError }) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdJhwMbAAAAAP658oVQALS41aSkllNuOehb5SvW", {
          action: "submit",
        })
        .then(async (token) => {
          setLoading(true);
          const requestBody = {
            query: `
            mutation DeleteAccount($password: String!){
              deleteAccount(password: $password){
                  resultStatus
                }
              }
          `,
            variables: {
              password: password,
              captcha: token,
            },
          };
          try {
            const {
              data: {
                data: {deleteAccount: response},
              },
            } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
              headers: {
                Authorization: `Bearer ${props.user.token}`,
              },
            });
            if (response) {
              logoutUser()
              history.push("/");
            } else {
              setFieldError("password", t("errors.wrongPassword"));
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

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      password: Yup.string()
        .required(t("errors.wrongPassword"))
        .min(5, t("errors.wrongPassword")),
    }),
    onSubmit,
  });

  return (
    <Container>
      <Header>{t("deleteAccountHeader")}</Header>
      <div>
        <Button text={t("delete")} onClick={() => setShowModal(true)} />
      </div>
      {showModal ? (
        <Modal>
          <DeleteAccountModalWrapper ref={ref}>
            <Header>{t("deleteAccountHeader")}</Header>
            <Description>{t("deleteAccountDescription")}</Description>
            <BasicInput
              id="password"
              placeholder={t("confirmPassword")}
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <ErrorsWrapper>
            {formik.touched.password && formik.errors.password ? (
              <Error>{formik.errors.password}</Error>
            ) : null}
          </ErrorsWrapper>
            <DeleteAccountButtonsWrapper>
              <Button onClick={() => setShowModal(false)} text={t("cancel")} />
              <Button onClick={formik.handleSubmit} text={t("delete")} />
            </DeleteAccountButtonsWrapper>
          </DeleteAccountModalWrapper>
        </Modal>
      ) : null}
    </Container>
  );
};

export default DeleteAccount;
