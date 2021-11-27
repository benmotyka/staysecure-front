import Button from "components/Button/Button"
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Container, Section, Header, Description} from "./Course.styles"
const CoursePending = (props) => {
  const {t} = useTranslation()
  const history = useHistory();

    return (
        <Container>
            <Section>
                <Header>{props.header}</Header>
                <Description>{props.description.substr(0,215)}{props.description.length > 215? '...':''}</Description>
            </Section>
            <Section alignRight>
                <Button text={t('continue')}  onClick={() => {
                    history.push(`/course/${props.linkToCourse}`);
                }}/>
            </Section>
        </Container>
    )
}

export default CoursePending
