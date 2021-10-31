import {
    AccountLevelChooserContainer,
    AccountLevelButton, 
  } from "components/Cards/Cards.styles";
  import { Container, Header } from "components/Account/Cards/Parts/PasswordChange.styles";

const AccountLevel = (props) => {
    return (
        <Container noPaddingBottom>
        <Header>Typ konta</Header>
        <AccountLevelChooserContainer>
        <AccountLevelButton active={props.data === 'basic'} onClick={() => {
      props.onClick((oldValues) => ({ ...oldValues, accountLevel: 'basic' }));

        }}>podstawowy</AccountLevelButton>
        <AccountLevelButton active={props.data === 'advanced'} onClick={() => {
      props.onClick((oldValues) => ({ ...oldValues, accountLevel: 'advanced' }));
        }}>zaawansowany</AccountLevelButton>
      </AccountLevelChooserContainer>
      </Container>
    )
}

export default AccountLevel
