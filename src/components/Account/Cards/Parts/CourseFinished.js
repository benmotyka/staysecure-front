import Button from "components/Button/Button"

import { Container, Section, Header, Description} from "./Course.styles"
const CourseFinished = (props) => {
    return (
        <Container ref={props.ref}>
            <Section>
                <Header>{props.header}</Header>
                <Description>{props.description.substr(0,215)}...</Description>
            </Section>
            <Section alignRight>
                <Button green text="Sprawdź odpowiedzi"/>
            </Section>
        </Container>
    )
}

export default CourseFinished
