import styled from "styled-components";
import colors from "constans/colors"
import {Link} from "react-router-dom"

export const Container = styled.div`
width: 50%;
min-width: 250px;
max-width: 550px;
background-color: ${colors.darkPurple};
margin-top: 30px;
padding: 40px;
display: flex;
flex-direction: column;
border-radius: 5px;
`
export const Header = styled.h2`
color: ${colors.white};
font-size: 27px;
margin: 0;
`

export const Label = styled.label`
font-size: 18px;
color: ${colors.white};
margin-left: 15px;
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
`

export const ErrorsWrapper = styled.div`
height: 40px;
position: relative;
`

export const Error = styled.p`
font-size: 15px;
color: red;
margin: 0;
`

export const SuccessText = styled.h4`
font-size: 20px;
color: ${colors.white};
text-align: center;
opacity: 0.8;
margin: 0;
`

export const AccountLevelChooserContainer = styled.div`
height: 40px;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
border: 1px solid ${colors.darkestPurple};
margin-bottom: 15px;
`

export const AccountLevelButton = styled.button`
text-transform: uppercase;
border: none;
cursor: pointer;
background-color: ${props => props.active ? colors.mediumDarkPurple: "inherit"};
color: ${props => props.active ? "rgba(255,255,255,.7)": "rgba(255,255,255,.2)"};
transition: 0.2s all ease-in-out;
`

export const LinkItem = styled(Link)`
text-decoration: none;
font-size: 11px;
opacity: ${props => props.orange ? "1": "0.7"};
transition: 0.2s all ease-in-out;
color: ${props => props.orange ? colors.orange: colors.white};
&:hover {
    color: ${colors.orange}
}
margin-top: 10px;
`

export const Description = styled.p`
margin: 0 0 25px 0;
color: ${colors.white};
opacity: 0.7;
`