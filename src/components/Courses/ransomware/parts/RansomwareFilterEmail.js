import styled, {css} from "styled-components";
import colors from "constans/colors.js"
import {FaFilter as FilterIcon, } from "react-icons/fa"
import {AiOutlineFile as FileIcon} from "react-icons/ai"

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

export const Wrapper = styled.div`
position: relative;
width: 50%;
height: 30%;
`

export const Filter = styled(FilterIcon)`
font-size: 150px;
color: ${colors.orange};
margin: 25px 0;
`

const file = css`
position: absolute;
bottom: 0;
left: ${props => props.x ? `${props.x}%` : '0'};
bottom: ${props => props.y ? `${props.y}%` : '0'};
transform: ${props => props.z ? `rotate(${props.z}deg)` : 'rotate(0)'};
font-size: 50px;
`

export const BadFile = styled(FileIcon)`
color: red;
${file};
`

export const GoodFile = styled(FileIcon)`
color: ${colors.lightGreen};
${file};
`

const RansomwareFilterEmail = () => {
    return (
        <Container>
            <Wrapper>
                <BadFile x={30} y={10} z={15}/>
                <BadFile x={40} y={25} z={35}/>
                <BadFile x={50} y={10} z={25}/>
                <BadFile x={60} y={5} z={-15}/>
                <BadFile x={35} y={50} z={15}/>
                <BadFile x={45} y={45} z={-5}/>
                <GoodFile x={30} y={30} z={3}/>
                <GoodFile x={40} y={5} z={-14}/>
                <GoodFile x={55} y={50} z={14}/>
                <GoodFile x={50} y={30} z={8}/>
                <GoodFile x={60} y={25} z={-10}/>
            </Wrapper>
            <Filter/>
            <Wrapper>
                <GoodFile x={30} y={50} z={-30}/>
                <GoodFile x={40} y={60} z={-10}/>
                <GoodFile x={50} y={70} z={25}/>
                <GoodFile x={60} y={55} z={-20}/>
                <GoodFile x={50} y={45} z={5}/>
                <GoodFile x={40} y={35} z={-22}/>
            </Wrapper>
        </Container>
    )
}

export default RansomwareFilterEmail
