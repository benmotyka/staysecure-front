import {Container, Header, Line, Content, Link} from "./Article.styles"
import Parser from 'html-react-parser';

const Article = (props) => {
    return (
        <Container>
            <Header>{props.name}</Header>
            <Line/>
          <Content>{Parser(props.description)}</Content>
        </Container >
    )
}

export default Article
