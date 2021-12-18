import React from 'react'
import styled from "styled-components";
import colors from "constans/colors.js"

import {FaWindows as WindowsIcon, FaLock as LockIcon} from "react-icons/fa"
import {AiOutlineClose as CloseIcon, AiOutlineBank as BankIcon} from "react-icons/ai"
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

export const RansomwareContainer = styled.div`
display: grid;
grid-template-columns: 30% 70%;
grid-template-rows: 1fr;
width: 700px;
height: 500px;
padding: 25px;
background-color: red;
box-sizing: border-box;
gap: 20px;
`

export const WindowContainer = styled.div`
border: 7px solid rgba(0,0,0,0.2);
background-clip: padding-box;
position: absolute;
border-radius: 10px;
top: 70px;
left: 170px;
`

export const WindowHeader = styled.div`
background-color: rgba(0,0,0,0.2);
padding: 5px;
padding-bottom: 10px;
display: flex;
justify-content: space-between;
`

export const RansomwareWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: center;
`
export const Lock = styled(LockIcon)`
font-size: 100px;
color: ${colors.white};
`

export const RansomwareWarning = styled.h4`
color: ${colors.white};
text-align: center;
`
export const RansomwareDescription = styled.p`
margin: 0;
font-size: 14px;
line-height: 16px;
`
export const RansomwareBody = styled.div`
border-radius: 12px;
background-color: ${colors.white};
box-sizing: border-box;
max-width: 400px;
padding: 10px;
`
export const RansomwareHeader = styled.h2`
color: ${colors.white};
text-align: center;
`

export const Close = styled(CloseIcon)`
font-size: 20px;
color: ${colors.white};
cursor: pointer;
`

export const DocumentContainer = styled.div`
width: 700px;
height: 500px;
padding: 25px;
background-color: ${colors.white};
box-sizing: border-box;
`

export const DocumentItemWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Bank = styled(BankIcon)`
font-size: 30px;
margin-bottom: 5px;
margin-right: 15px;
`

export const DocumentHeader = styled.h5`
margin: 0;
font-size: 20px;
`