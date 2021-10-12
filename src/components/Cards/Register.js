
import {Container, Header, Input, Label, Wrapper} from "./Cards.styles"

import Button from "../Button/Button"
const Register = () => {
    return (
        <Container>
            <Header>Rejestracja</Header>
            <Input placeholder="Email" type="email" autocomplete="off"></Input>
            <Input placeholder="Nazwa użytkownika" autocomplete="off"></Input>
            <Input placeholder="Hasło" type="password" autocomplete="off"></Input>
            <Input placeholder="Potwierdź hasło" type="password" autocomplete="off"></Input>
            <Wrapper>
            </Wrapper>
            <Button text="Rejestracja" full/>
        </Container>
    )
}

export default Register
