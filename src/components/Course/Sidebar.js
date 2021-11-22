import Parser from 'html-react-parser';

import {Container, Wrapper, Header, Text, TextContainer, InteractiveSuccessContainer, SuccessIcon, ErrorIcon} from "./Sidebar.styles"
const Sidebar = (props) => {
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
        </Container>
    )
}

export default Sidebar
