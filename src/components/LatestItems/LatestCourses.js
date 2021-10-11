import React from 'react'

import {Container, Header, Line, ItemsWrapper} from "./LatestItems.styles"
import {PageCentered} from "components/Pages/Pages.styles"

import Course from "./Previews/Course"
import imag1 from './Previews/Images/keylogger.jpg'
const LatestCourses = () => {
    return (
        <PageCentered>
            <Container>
                <Header>Ostatnie kursy</Header>
                <Line></Line>
                <ItemsWrapper>
                    <Course img={imag1} header="Backdoor" description="sadasd sadasd asdsa das dsa"/>
                    <Course header="Backdoor" description="sadasd sadasd asdsa das dsa"/>
                    <Course header="Backdoor" description="sadasd sadasd asdsa das dsa"/>
                </ItemsWrapper>
            </Container>
        </PageCentered>
    )
}

export default LatestCourses
