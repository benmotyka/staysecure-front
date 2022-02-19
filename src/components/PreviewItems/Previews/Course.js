import React from 'react'
import Parser from 'html-react-parser';

import {Container, ImageContainer,Image, Body, HeaderContainer, Header, Arrow, Description, DifficultyLevel, DifficultyWrapper } from "./Previews.styles"
import Difficulty from './Difficulty/Difficulty';
const Course = (props) => {
    return (
<Container to={props.to}>
<ImageContainer>
    <Image src={props.img}/>
</ImageContainer>
    <Body>
        <HeaderContainer>
            <Header>{props.header}{<Difficulty level={props.difficulty}/>}</Header>
            <Arrow/>
        </HeaderContainer>
        <Description>{Parser(props.description)}</Description>
        <DifficultyWrapper>
    {/* {[...Array(props.difficulty)].map((level, index) => (
        <DifficultyLevel key={index}/>
    ))} */}
    </DifficultyWrapper>
    </Body>
</Container>            
    )
}

export default Course
