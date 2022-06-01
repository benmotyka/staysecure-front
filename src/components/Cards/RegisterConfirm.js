import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import { Container, SuccessText } from "./Cards.styles";
import { useTranslation } from "react-i18next";
import { useGlobalLoader } from "store/actions/global";
import GlobalLoaderContext from "context/GlobalLoader.context";

const RegisterConfirm = (props) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { startGlobalLoader, stopGlobalLoader } = useGlobalLoader();

  useEffect(() => {
      confirmRegistration(props.token);
  },[]);

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
      startGlobalLoader("registerConfirm");
      const response = await axios.post(
        `${window.env.API_URL}/graphql`,
        requestBody
      );
      if (response.data.errors) {
        console.log(response.data.errors);
        history.push("/login");
      } else {
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      stopGlobalLoader("registerConfirm");
    }
  };
  return (
    <GlobalLoaderContext>
      <Container>
        <SuccessText>{t("accountConfirmedSuccess")}</SuccessText>
      </Container>
    </GlobalLoaderContext>
  );
};

export default RegisterConfirm;
