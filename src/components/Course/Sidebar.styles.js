import styled, {css} from "styled-components";
import colors from "constans/colors"
import {IoMdCheckmarkCircleOutline as Success} from "react-icons/io"
import {VscError as Error} from "react-icons/vsc"
export const courseSidebarWidth = "400px"

export const Container = styled.div`
width: ${courseSidebarWidth};
position: absolute;
left: 0;
top: 80px;
bottom: 0;
background-color: ${colors.darkPurple};
display: flex;
justify-content: center;
overflow-y: auto;
flex-direction: column;
@media screen and (max-width: 600px) {
    display: none;
}
min-height: 840px;
`

export const Wrapper = styled.div`
margin: 10px 25px;
position: absolute;
top: 0;
bottom: 80px;
width: 310px;
padding: 0 20px 20px 20px;
min-height: 730px;
background-color: ${colors.darkestPurple};
display: flex;
justify-content: space-between;
flex-direction: column;
`

const TextFormat = css`
color: ${colors.white};
`
export const Header = styled.h2`
${TextFormat};
`
export const Text = styled.p`
${TextFormat};
opacity: 0.8;
`

const Icon = css`
font-size: 100px;
opacity: ${props => props.show ? "1" : "0"};
transition: 0.5s all ease-in;
`
export const SuccessIcon = styled(Success)`
${Icon};
color: ${colors.hoverLightGreen};
`

export const ErrorIcon = styled(Error)`
${Icon};
color: red;
`

export const TextContainer = styled.div`
width: 100%;
height: 75%;
font-size: 15px;
`

export const InteractiveSuccessContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

export const LevelWrapper = styled.div`
width: 100%;
height: 80px;
padding: 10px 25px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: 0;
`

export const LevelFrame = styled.div`
border-radius: 5px;
width: 100%;
color: ${colors.gold};
opacity: 0.4;
border: 1px solid ${colors.gold};
padding: 15px 25px;
text-align: center;
font-size: 18px;
`