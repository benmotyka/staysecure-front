import React from 'react'
import { PageCentered } from "components/Pages/Pages.styles";

import {Container, ArrowBack, Header, Line, Content} from "./Article.styles"
const Article = (props) => {
    return (
        <PageCentered>
        <Container>
            <ArrowBack/>
            <Header>{props.name}</Header>
            <Line/>
          <Content>{props.name}</Content>
        </Container >
        </PageCentered>
    )
}

export default Article
