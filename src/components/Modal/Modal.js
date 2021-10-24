import {Container, Wrapper, Header, Text, ButtonsContainer} from "./Modal.styles"
import Button from "../Button/Button"
const Modal = (props) => {
    return (
        <Container>
            <Wrapper>
                <Header>{props.header}</Header>
                <Text>{props.text}</Text>
                <ButtonsContainer>
                    <Button onClick={props.button1OnClick} text={props.button1Text} />
                    {!props.oneButton && <Button onClick={props.button2OnClick} text={props.button2Text} />}
                </ButtonsContainer>
            </Wrapper>
        </Container>
    )
}

export default Modal
