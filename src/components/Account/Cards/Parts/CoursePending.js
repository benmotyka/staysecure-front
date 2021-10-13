import Button from "components/Button/Button"

import { Container, Section, Header, Description} from "./Course.styles"
const CoursePending = (props) => {
    return (
        <Container>
            <Section>
                <Header>{props.header}</Header>
                <Description>{props.description.substr(0,215)}...</Description>
            </Section>
            <Section alignRight>
                <Button text="Wznów"/>
            </Section>
        </Container>
    )
}

export default CoursePending
