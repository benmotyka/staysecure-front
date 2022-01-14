import styled from "styled-components"
import colors from "constans/colors"

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Header = styled.h2`
font-size: 32px;
color: ${colors.orange};
`

export const RelativeWrapper = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`


const WhatIsKeylogger = () => {
    return (
        <Container>
            <Header>Keylogger</Header>
            <RelativeWrapper></RelativeWrapper>
        </Container>
    )
}

export default WhatIsKeylogger
