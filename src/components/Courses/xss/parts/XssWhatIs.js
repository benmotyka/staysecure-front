import styled from "styled-components";
import colors from "constans/colors.js";

import {HiOutlineArrowNarrowDown as ArrowIcon} from "react-icons/hi"

const RelativeContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
`

const Description = styled.p`
font-size: 18px;
color: ${colors.white};
position: absolute;
width: 350px;
opacity: 0.8;
`

const Header = styled.h1`
font-size: 3rem;
color: ${colors.orange};
position: absolute;
left: 45%;
top: 40%;
`

const Arrow = styled(ArrowIcon)`
font-size: 50px;
color: ${colors.white};
position: absolute;
`

const XssWhatIs = () => {
    return (
        <RelativeContainer>
            <Header>
                Atak XSS
            </Header>
                <Description style={{top: "20%", left: "17%"}}>Jedna z najpowszechniejszych podatności aplikacji webowych i jednocześnie najniebezpieczniejsza</Description>
                <Description style={{top: "20%", right: "0"}}>Ofiarą ataku nie jest aplikacja, lecz użytkownik</Description>
                <Description style={{bottom: "25%", right: "0"}}>Polega na wstrzyknięciu do treści strony złośliwego kodu JavaScript</Description>
                <Description style={{bottom: "17%", left: "10%"}}>Podatność występuje szczególnie często w miejscach, które pozwalają użytkownikowi na dodanie treści do strony</Description>
            <Arrow style={{top: "37%", left: "39%", transform: "rotate(145deg)"}}/>
            <Arrow style={{top: "35%", right: "28%", transform: "rotate(215deg)"}}/>
            <Arrow style={{bottom: "37%", left: "40%", transform: "rotate(35deg)"}}/>
            <Arrow style={{bottom: "39%", right: "33%", transform: "rotate(-30deg)"}}/>
        </RelativeContainer>
    )
}

export default XssWhatIs
