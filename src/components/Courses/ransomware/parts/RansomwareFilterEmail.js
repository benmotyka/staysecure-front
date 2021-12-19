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
justify-content: center;
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
                <BadFile x={25} y={60} z={15}/>
                <GoodFile x={35} y={66} z={35}/>
                <BadFile x={45} y={58} z={25}/>
                <GoodFile x={55} y={61} z={-15}/>
                <BadFile x={65} y={54} z={15}/>
                
                <BadFile x={30} y={33} z={-15}/>
                <GoodFile x={40} y={35} z={3}/>
                <BadFile x={50} y={31} z={-14}/>
                <GoodFile x={60} y={32} z={20}/>

                <GoodFile x={36} y={0} z={0}/>
                <BadFile x={45} y={0} z={15}/>
                <GoodFile x={53} y={0} z={-10}/>

            </Wrapper>
            <Filter/>
            <Wrapper>
                <GoodFile x={45} y={85} z={-30}/>
                <GoodFile x={40} y={60} z={-10}/>
                <GoodFile x={50} y={60} z={25}/>
                <GoodFile x={35} y={30} z={15}/>
                <GoodFile x={45} y={30} z={0}/>
                <GoodFile x={55} y={30} z={-22}/>
            </Wrapper>
        </Container>
    )
}

export default RansomwareFilterEmail
