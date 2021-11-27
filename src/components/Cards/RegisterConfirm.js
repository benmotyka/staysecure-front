import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import {
    Container,
    SuccessText
  } from "./Cards.styles";
  import Loader from "components/Loader/Loader";
import { useTranslation } from "react-i18next";

const RegisterConfirm = (props) => {
    const history = useHistory();
  const {t} = useTranslation()
    

    useEffect(async () => {
        try {
          confirmRegistration(props.token);
        } catch (error) {
          console.log(error);
        }
      }, []);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);



  const confirmRegistration = async (registrationToken) => {
    setLoading(true);
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
      setLoading(false);
      console.log(response)
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
    }
  };
    return (
    <Container>
        {loading && <Loader/>}
        {success && <SuccessText>{t('accountConfirmedSuccess')}</SuccessText>}
    </Container>
    )
}

export default RegisterConfirm
