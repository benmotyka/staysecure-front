import React from 'react'

import {Container, ImageContainer,Image, Body, HeaderContainer, Header, Arrow, Description } from "./Previews.styles"
const Course = (props) => {
    return (
<Container>
<ImageContainer>
    <Image src={props.img}/>
</ImageContainer>
    <Body>
        <HeaderContainer>
            <Header>{props.header}</Header>
            <Arrow/>
        </HeaderContainer>
        <Description>{props.description}</Description>
    </Body>
</Container>            
    )
}

export default Course
