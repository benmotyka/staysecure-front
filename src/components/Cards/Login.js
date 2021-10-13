
import {Container, Header, Input, Label, Wrapper} from "./Cards.styles"

import Button from "../Button/Button"
import Loader from "components/Loader/Loader"
const Login = () => {
    return (
        <Container>
            {/* <Loader/> */}
            <Header>Logowanie</Header>
            <Input placeholder="Email" type="email"/>
            <Input placeholder="Hasło" type="password"/>
            <Wrapper>
            <Input id="checkbox" type="checkbox"/>
            <Label for="checkbox">Zapamiętaj mnie</Label>
            </Wrapper>
            <Button text="Logowanie" full/>
        </Container>
    )
}

export default Login
