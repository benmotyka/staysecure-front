import Button from "components/Button/Button"
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Container, Section, Header, Description} from "./Course.styles"
const CourseFinished = (props) => {
  const history = useHistory();
  const {t} = useTranslation()

    return (
        <Container ref={props.ref}>
            <Section>
                <Header>{props.header}</Header>
                <Description>{props.description.substr(0,215)}{props.description.length > 215? '...':''}</Description>
            </Section>
            <Section alignRight>
                <Button green text={t('proceedToQuiz')} onClick={() => {
                    history.push(`/quiz-summary/${props.linkToQuiz}`);
                }}/>
            </Section>
        </Container>
    )
}

export default CourseFinished
