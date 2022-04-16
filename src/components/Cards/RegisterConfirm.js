import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import { Container, SuccessText } from "./Cards.styles";
import Loader from "components/Loader/GlobalLoader";
import { useTranslation } from "react-i18next";

const RegisterConfirm = (props) => {
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(async () => {
    try {
      confirmRegistration(props.token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const confirmRegistration = async (registrationToken) => {
    const requestBody = {
      query: `
        mutation ConfirmEmail($token: String!){
            confirmEmail(token: $token){
                email
            }
        }
        `,
      variables: {
        token: registrationToken,
      },
    };
    try {
      const response = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody
      );
      if (response.data.errors) {
        history.push("/login");
      } else {
        setSuccess(true);
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : success ? (
        <SuccessText>{t("accountConfirmedSuccess")}</SuccessText>
      ) : null}
    </Container>
  );
};

export default RegisterConfirm;
