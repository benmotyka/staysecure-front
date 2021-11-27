import {
  AccountLevelChooserContainer,
  AccountLevelButton,
} from "components/Cards/Cards.styles";
import {
  Container,
  Header,
} from "components/Account/Cards/Parts/PasswordChange.styles";
import { useTranslation } from "react-i18next";

const AccountLevel = (props) => {

  const {t} = useTranslation()

  return (
    <Container noPaddingBottom>
      <Header>{t('accountType')}</Header>
      <AccountLevelChooserContainer>
        <AccountLevelButton
          active={props.data === "basic"}
          onClick={() => {
            if (props.data === "basic") return;
            props.onClick((oldValues) => ({
              ...oldValues,
              accountLevel: "basic",
            }));
            if (props.sendRequest) props.sendRequest("basic");
          }}
        >
          {t('basic')}
        </AccountLevelButton>
        <AccountLevelButton
          active={props.data === "advanced"}
          onClick={() => {
            if (props.data === "advanced") return;
            props.onClick((oldValues) => ({
              ...oldValues,
              accountLevel: "advanced",
            }));
            if (props.sendRequest) props.sendRequest("advanced");
          }}
        >
          {t('advanced')}
        </AccountLevelButton>
      </AccountLevelChooserContainer>
    </Container>
  );
};

export default AccountLevel;
