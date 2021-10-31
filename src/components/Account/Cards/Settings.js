import { useState } from "react";
import {Container, Header} from "./Cards.styles"
import PasswordChange from "./Parts/PasswordChange"
import AccountLevel from "./Parts/AccountLevel"

import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";

const Settings  = () => {
  const user = useSelector(selectUser);

  const [userData, setUserData] = useState({
      accountLevel: user.accountLevel
    })

    return (
        <Container>
            <Header>Ustawienia</Header>
            <AccountLevel account data={userData.accountLevel} onClick={setUserData}/>
            <PasswordChange user={user}/>
        </Container>
    )
}

export default Settings
