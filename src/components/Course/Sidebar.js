import React from 'react'

import {Container, Wrapper, Header, Text} from "./Sidebar.styles"
const Sidebar = (props) => {
    return (
        <Container>
            <Wrapper>
                <Header>{props.data[props.activeSlide].header}</Header>
                <Text>{props.data[props.activeSlide].text}</Text>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
