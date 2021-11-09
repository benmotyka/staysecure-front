import Button from "components/Button/Button"
import { useHistory } from "react-router-dom";

import { Container, Section, Header, Description} from "./Course.styles"
const CourseFinished = (props) => {
  const history = useHistory();

    return (
        <Container ref={props.ref}>
            <Section>
                <Header>{props.header}</Header>
                <Description>{props.description.substr(0,215)}{props.description.length > 215? '...':''}</Description>
            </Section>
            <Section alignRight>
                <Button green text="Przejdź do quizu" onClick={() => {
                    history.push(`/quiz/${props.linkToQuiz}`);
                }}/>
            </Section>
        </Container>
    )
}

export default CourseFinished
