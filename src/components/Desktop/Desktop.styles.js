import React from 'react'
import styled from "styled-components";
import colors from "constans/colors.js"

import {FaWindows as WindowsIcon} from "react-icons/fa"

export const DesktopContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
background-image: ${props => props.backgroundUrl ? `url(${props.backgroundUrl})` : ''};
background-size: cover;
`

export const TaskBar = styled.div`
width: 100%;
position: absolute;
height: 40px;
background-color: rgb(27,27,27);
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Windows = styled(WindowsIcon)`
color: ${colors.white};
font-size: 20px;
`

export const IconGroup = styled.div`
display: flex;
width: 100%;
height: 100%;
`

export const TaskBarImage = styled.img`
height: 25px;
`

export const TaskBarIcon = styled.div`
height: 100%;
min-width: 50px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover{
    background-color: rgba(51,51,51);
}

&:hover ${Windows}{
    color: rgb(66,156,227);
}
`   

export const DateContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 10px;
`

export const DateItem = styled.p`
font-size: 12px;
color: ${colors.white};
margin: 0;
`

export const BasicIcons = styled.ul`
display: grid;
list-style: none;
margin: 0;
padding: 0;
grid-template-columns: 1fr;
grid-template-rows: repeat(10, 1fr);
width: 100px;
height: 90%;
position: absolute;
`

export const Icon = styled.li`
margin: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
cursor: pointer;
&:hover{
    background-color: rgba(0,0,0,0.2);
}
`

export const IconImage = styled.img`
width: 50px;
`

export const IconText = styled.p`
margin: 0;
font-size: 10px;
text-align: center;
color: ${colors.white};
padding: 0 5px;
`

export const ChildContainer = styled.div`
position: absolute;
top: 15px;
left: 10%;
`
