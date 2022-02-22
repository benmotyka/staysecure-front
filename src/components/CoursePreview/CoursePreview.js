import {Container, ReviewWrapper, ContentWrapper, RateWrapper, CommentsWrapper, Comment } from "./CoursePreview.styles"

const CoursePreview = () => {
  return (
    <Container>
        <ContentWrapper>content</ContentWrapper>
        <ReviewWrapper>
            <RateWrapper>5 gwiazdek</RateWrapper>
            <CommentsWrapper>
                <Comment>heja</Comment>
                <Comment>supera</Comment>
            </CommentsWrapper>
        </ReviewWrapper>
    </Container>
  )
}

export default CoursePreview