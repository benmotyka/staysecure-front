import { useState } from "react";
import {Container, Header} from "./Cards.styles"
import PasswordChange from "./Parts/PasswordChange"
import AccountLevel from "./Parts/AccountLevel"
import axios from "axios";
import { useTranslation } from "react-i18next";
import DeleteAccount from "./Parts/DeleteAccount";
import { useChangeAccountLevel, useLogin } from "store/actions/user";

const Settings  = () => {
  const {t} = useTranslation()
  const { userDetails } = useLogin()

  const { changeAccountLevel } = useChangeAccountLevel();
  const [userAccountLevel, setUserAccountLevel] = useState(userDetails.accountLevel)

  const sendRequest = async (newLevel) => {
      try {
        const requestBody = {
            query: `
            mutation ChangeAccountLevel($newAccountLevel: String!){
                changeAccountLevel(newAccountLevel: $newAccountLevel){
                  accountLevel
                }
              }
          `,
            variables: {
                newAccountLevel: newLevel,
            },
          };

          const {
            data : {data : {changeAccountLevel : {accountLevel}}}
          } = await axios.post(`${window.env.API_URL}/graphql`, requestBody, {
            headers: {
              Authorization: `Bearer ${userDetails.token}`,
            },
          });
          if (accountLevel) {
              changeAccountLevel(accountLevel)
          }
      } catch (error) {
        console.log(error);
      }
  }
    return (
        <Container>
            <Header>{t('settings')}</Header>
            <AccountLevel account data={userAccountLevel} onClick={setUserAccountLevel} sendRequest={sendRequest}/>
            <PasswordChange user={userDetails}/>
            <DeleteAccount user={userDetails}/>
        </Container>
    )
}

export default Settings
