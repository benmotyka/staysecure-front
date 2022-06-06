import {Container, Wrapper, Header, Text, ButtonsContainer} from "./Modal.styles"
import Button from "../Button/Button"

const ButtonsModal = (props) => {
  return (
<Container>
    <Wrapper ref={props.innerRef}>
        <Header>{props.header}</Header>
        {props.text ? <Text>{props.text}</Text> : null}
        <ButtonsContainer>
            <Button onClick={props.button1OnClick} text={props.button1Text} />
            {!props.oneButton && <Button onClick={props.button2OnClick} text={props.button2Text} />}
        </ButtonsContainer>
    </Wrapper>
</Container>
  )
}

export default ButtonsModal