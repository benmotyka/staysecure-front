import React from 'react'
import Parser from 'html-react-parser';

import {Container, Body, HeaderContainer, Header, Arrow, Description } from "./Previews.styles"
const Article = (props) => {
    return (
<Container noimage to={props.to}>
    <Body>
        <HeaderContainer>
            <Header>{props.header}</Header>
            <Arrow/>
        </HeaderContainer>
        <Description>{Parser(props.description.substr(0, 75))}...</Description>
    </Body>
</Container>            
    )
}

export default Article
