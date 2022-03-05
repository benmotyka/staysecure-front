import React from 'react'

import {
    Container,
    CommentWrapper,
    Text,
    DetailsWrapper,
    Details
} from "./Comment.styles"

const Comment = (props) => {
  return (
    <Container>
        <CommentWrapper>
            <Text>{props.comment}</Text>
        </CommentWrapper>
        <DetailsWrapper>
            <Details>{props.username}</Details>
            <Details>{new Date(parseInt(props.createdAt)).toLocaleString()}</Details>
        </DetailsWrapper>
    </Container>
  )
}

export default Comment