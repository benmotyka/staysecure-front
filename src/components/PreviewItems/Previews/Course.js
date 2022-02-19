import React from 'react'
import Parser from 'html-react-parser';

import {Container, ImageContainer,Image, Body, HeaderContainer, Header, Arrow, Description, DifficultyLevel, DifficultyWrapper, FooterContainer, Comment, CommentWrapper, EmptyRateLevel } from "./Previews.styles"
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

    <FooterContainer><CommentWrapper>51<Comment/></CommentWrapper> <div>
    <DifficultyWrapper>
    {[...Array(props.difficulty)].map((level, index) => (
        <DifficultyLevel key={index}/>
    ))} 
    {[...Array(5 - props.difficulty)].map((level, index) => (
        <EmptyRateLevel key={index}/>
    ))} 
    </DifficultyWrapper>
        </div></FooterContainer>
    </Body>
</Container>            
    )
}

export default Course
