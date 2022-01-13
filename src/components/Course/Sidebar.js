import Parser from 'html-react-parser';
import { useTranslation } from "react-i18next";

import {Container, Wrapper, Header, Text, TextContainer, InteractiveSuccessContainer, SuccessIcon, LevelWrapper, LevelFrame} 
from "./Sidebar.styles"
const Sidebar = (props) => {
  const {t} = useTranslation()
    return (
        <Container>
            <Wrapper>
                <TextContainer>
                <Header>{props.data[props.activeSlide].header}</Header>
                <Text>{Parser(props.data[props.activeSlide].text)}</Text>
                </TextContainer>
                <InteractiveSuccessContainer>
                    <SuccessIcon show={!props.waitForCorrectAnswer && props.data[props.activeSlide].interactive}/> 
                </InteractiveSuccessContainer>
            </Wrapper>
            <LevelWrapper>
            
<LevelFrame>
{props.data[props.activeSlide].level === 'basic' && t('basic')}
{props.data[props.activeSlide].level === 'advanced' && t('advanced')}
</LevelFrame>
            </LevelWrapper>
        </Container>
    )
}

export default Sidebar
