
import {Container, Header, Input, Label, Wrapper} from "./Cards.styles"

import Button from "../Button/Button"
import Loader from "components/Loader/Loader"
const Login = () => {
    return (
        <Container>
            {/* <Loader/> */}
            <Header>Logowanie</Header>
            <Input placeholder="Email" type="email"></Input>
            <Input placeholder="Hasło" type="password"></Input>
            <Wrapper>
            <Input id="checkbox" type="checkbox"></Input>
            <Label for="checkbox">Zapamiętaj mnie</Label>
            </Wrapper>
            <Button text="Logowanie" full/>
        </Container>
    )
}

export default Login
