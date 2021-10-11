import React from 'react'

import {Container, Body, HeaderContainer, Header, Arrow, Description } from "./Previews.styles"
const Article = (props) => {
    return (
<Container noImage>
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

export default Article
