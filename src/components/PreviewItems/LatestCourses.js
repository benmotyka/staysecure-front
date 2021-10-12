import React from 'react'

import {Container, Header, Line, ItemsWrapper} from "./PreviewItems.styles"
import {PageCentered} from "components/Pages/Pages.styles"

import Course from "./Previews/Course"
import {courses} from "./LatestItems.data"

const LatestCourses = () => {

    return (
        <PageCentered>
            <Container>
                <Header>Ostatnie kursy</Header>
                <Line></Line>
                <ItemsWrapper>
                    {courses.map(course => (
                  <Course to={course.link} img="preview.png" header={course.header} description={course.description}/>              
                    ))}
                </ItemsWrapper>
            </Container>
        </PageCentered>
    )
}

export default LatestCourses
