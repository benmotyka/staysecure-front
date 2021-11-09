import Button from "components/Button/Button"
import { useHistory } from "react-router-dom";

import { Container, Section, Header, Description} from "./Course.styles"
const CoursePending = (props) => {
  const history = useHistory();

    return (
        <Container>
            <Section>
                <Header>{props.header}</Header>
                <Description>{props.description.substr(0,215)}{props.description.length > 215? '...':''}</Description>
            </Section>
            <Section alignRight>
                <Button text="Wznów"  onClick={() => {
                    history.push(`/course/${props.linkToCourse}`);
                }}/>
            </Section>
        </Container>
    )
}

export default CoursePending
