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
            <Details>{new Date(parseInt(props.createdAt)).toLocaleString()}</Details>
            <Details>{props.username}</Details>
        </DetailsWrapper>
    </Container>
  )
}

export default Comment