import {Container} from "./Modal.styles"
const Modal = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Modal
