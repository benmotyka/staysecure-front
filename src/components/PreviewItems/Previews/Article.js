import React from 'react'

import {Container, Body, HeaderContainer, Header, Arrow, Description } from "./Previews.styles"
const Article = (props) => {
    return (
<Container noImage to={props.to}>
    <Body>
        <HeaderContainer>
            <Header>{props.header}</Header>
            <Arrow/>
        </HeaderContainer>
        <Description>{props.description.substr(0, 75)}...</Description>
    </Body>
</Container>            
    )
}

export default Article
