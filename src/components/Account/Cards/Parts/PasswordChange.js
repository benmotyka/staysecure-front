import React from 'react'
import {Container, Header} from "./PasswordChange.styles"
import {Input, Wrapper} from "components/Cards/Cards.styles"
import Button from "components/Button/Button"
const PasswordChange = () => {
    return (
        <Container>
            <Header>Zmiana hasła</Header>
            <Input placeholder="Stare hasło" type="password"/>
            <Input placeholder="Nowe hasło" type="password"/>
            <Input placeholder="Potwierdź nowe hasło" type="password"/>
            <Wrapper></Wrapper>
            <Button full text="Zmień"/>
        </Container>
    )
}

export default PasswordChange
