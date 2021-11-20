import styled, {css} from "styled-components";
import colors from "constans/colors"
import {IoMdCheckmarkCircleOutline as Success} from "react-icons/io"
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
padding: 0 20px;
width: 100%;
height: calc(100% - 100px);
background-color: ${colors.darkestPurple};
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

export const SuccessIcon = styled(Success)`
font-size: 120px;
color: ${colors.hoverLightGreen};
opacity: ${props => props.show ? "1" : "0"};
transition: 0.5s all ease-in;
`

export const TextContainer = styled.div`
width: 100%;
height: 75%;
`

export const InteractiveSuccessContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`