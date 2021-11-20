import React from 'react'

import {Container, Wrapper, Header, Text, TextContainer, InteractiveSuccessContainer, SuccessIcon} from "./Sidebar.styles"
const Sidebar = (props) => {
    return (
        <Container>
            <Wrapper>
                <TextContainer>
                <Header>{props.data[props.activeSlide].header}</Header>
                <Text>{props.data[props.activeSlide].text}</Text>
                </TextContainer>
                <InteractiveSuccessContainer>
                    <SuccessIcon show={!props.waitForCorrectAnswer && props.data[props.activeSlide].interactive}/> 
                </InteractiveSuccessContainer>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
