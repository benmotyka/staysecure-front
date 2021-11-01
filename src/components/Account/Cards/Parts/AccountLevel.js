import {
  AccountLevelChooserContainer,
  AccountLevelButton,
} from "components/Cards/Cards.styles";
import {
  Container,
  Header,
} from "components/Account/Cards/Parts/PasswordChange.styles";

const AccountLevel = (props) => {
  return (
    <Container noPaddingBottom>
      <Header>Typ konta</Header>
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
          podstawowy
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
          zaawansowany
        </AccountLevelButton>
      </AccountLevelChooserContainer>
    </Container>
  );
};

export default AccountLevel;
