import { useState } from "react";
import styled from "styled-components";
import colors from "constans/colors.js";
import { FaUser as UserIcon, FaLongArrowAltRight as ArrowIcon } from "react-icons/fa";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import {MdOutlineAttachEmail as MailIcon} from "react-icons/md"
import {IoIosApps as AppIcon} from "react-icons/io"
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 15px;
`;

export const Button = styled.button`
  outline: none;
  background-color: ${(props) =>
    props.active ? colors.mediumDarkPurple : colors.darkestPurple};
  color: ${colors.white};
  cursor: pointer;
  border: 1px solid ${colors.darkPurple};
  box-sizing: border-box;
  font-size: 16px;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: ${colors.mediumDarkPurple};
  }
`;

export const ContentWrapper = styled.div`
  height: calc(100% - 70px);
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 80%;
`;

export const ContentHeader = styled.h3`
  font-size: 18px;
  text-align: center;
  color: ${colors.white};
  padding: 15px;
  margin: 0;
`;

export const ContentBody = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const BadUser = styled(UserIcon)`
  color: red;
  font-size: 150px;
`;


export const Victim = styled(UserIcon)`
position: ${props => props.absolute ? `absolute` : 'static'};
color: ${colors.white};
  font-size: ${props => props.small ? `50px` : '150px'};
`;

export const Arrow = styled(ArrowIcon)`
color: red;
font-size: 100px;
transform: ${props => props.rotate ? `rotate(${props.rotate}deg)` : 'rotate(0)'};
position: ${props => props.absolute ? `absolute` : 'static'};
`

export const RelativeContainer = styled.div`
position: relative;
width: 100px;
height: 100px;
`

export const Laptop = styled(LaptopIcon)`
font-size: 150px;
color: ${colors.white};
`

export const Mail = styled(MailIcon)`
font-size: 80px;
color: red;
margin: 15px;
`

export const App = styled(AppIcon)`
color: ${colors.white};
font-size: 150px;
`

const RansomwareInfection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          Zdalny dostęp
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          Maile phishingowe
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
          Zdalne wykonanie kodu
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
            Atakujący poprzez techniki inżynieri społecznej uzyskuje zdalny
            dostęp do urządzenia ofiary, używając takich programów jak TeamViewer. Tym samym jest w stanie wykonać na jej urządzeniu dowolną akcję, w tym przypadku będzie to zainstalowanie ransomware, zaszyfrowane wcześniej przygotowanym kluczem.
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <Laptop/>
            <Victim/>
          </ContentBody>
        </ContentWrapper>
      )}
      {activeSlide === 1 && <ContentWrapper>
          <ContentHeader>
            Atakujący przygotowuje wspólny szablon maila phishingowego, który następnie zostanie rozesłany do wielu ofiar. Każdy załącznik w mailu będzie zawierał ransomware. Wirus zaszyfruje pliki używając unikalnego dla każdego adresu email, wcześniej przygotowanego klucza.
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <Mail/>
            <RelativeContainer>
            <Arrow rotate={45} absolute style={{top: "31px", left: "-9px"}}/>
            <Arrow absolute/>
            <Arrow rotate={-45} absolute style={{top: "-31px", left: "-9px"}}/>
            </RelativeContainer>
            <RelativeContainer>
            <Victim small absolute style={{top: "100px", right: "20px"}}/>
            <Victim small absolute style={{top: "20px", right: "20px"}}/>
            <Victim small absolute style={{top: "-70px", right: "20px"}}/>
            </RelativeContainer>
          </ContentBody>
          </ContentWrapper>}{" "}
      {activeSlide === 2 && <ContentWrapper>
        <ContentHeader>
            Atakujący znajduje lukę w programie, który uruchomiła ofiara lub serwer. Luka ta pozwala na zdalne wykonanie kodu na urzadzeniu końcowym - co wiązać się może z pobraniem a następnie uruchomieniem ransomware przez atakującego. 
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <App/>
          </ContentBody>
          </ContentWrapper>}
    </Container>
  );
};

export default RansomwareInfection;
