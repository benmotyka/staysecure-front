import styled from "styled-components";
import colors from "constans/colors";
import {MdMobileOff as Icon} from "react-icons/md"
export const Container = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: ${colors.darkestPurple};
z-index: 1000;
display: none;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
@media screen and (max-width: 1200px){
    display: flex;
}
`
export const Header = styled.h2`
font-size: 25px;
color: ${colors.white};
margin-bottom: 0;
`

export const Description = styled.p`
font-size: 18px;
color: ${colors.white};
margin-top: 0;
`

export const MobileIcon = styled(Icon)`
color: ${colors.orange};
font-size: 40px;
`