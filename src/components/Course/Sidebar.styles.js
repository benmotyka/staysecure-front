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
`

export const Wrapper = styled.div`
margin: 10px 25px;
padding: 0 20px 20px 20px;
width: 100%;
height: calc(100% - 120px);
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
font-size: 120px;
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