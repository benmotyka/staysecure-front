import styled from "styled-components";
import colors from "constans/colors";

import { FaUser as UserIcon } from "react-icons/fa";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import { GiUsbKey as UsbIcon } from "react-icons/gi";
import { IoArrowRedoSharp as ArrowIcon } from "react-icons/io5";
import { VscGistSecret as SecretIcon } from "react-icons/vsc";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max(32%, 300px) 2% max(32%, 300px) 2% max(32%, 300px);
  grid-template-rows: 1fr;
  padding: 55px 0 25px 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: grid;
  grid-template-rows: 25% 30% 45%;
  grid-template-columns: 1fr;
`;

export const ContentBody = styled.div`
  position: relative;
  margin: auto 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const VerticalLine = styled.hr`
  width: 0;
  height: 100%;
  opacity: 10%;
`;

export const Header = styled.h4`
  color: ${colors.orange};
  font-size: 16px;
  text-align: center;
  margin: 0 25px 50px;
`;

export const User = styled(UserIcon)`
  font-size: 90px;
  position: absolute;
  color: ${(props) => (props.bad ? colors.red : colors.white)};
`;

export const Usb = styled(UsbIcon)`
  font-size: 20px;
  color: ${colors.red};
  position: absolute;
  transform: rotate(225deg);
`;

export const Laptop = styled(LaptopIcon)`
  position: absolute;
  color: ${(props) => (props.bad ? colors.red : colors.white)};
  font-size: 70px;
`;

export const Arrow = styled(ArrowIcon)`
  position: absolute;
  font-size: 50px;
  color: ${colors.red};
`;

export const RelativeWrapper = styled.div`
  position: absolute;
`;

export const SecretData = styled(SecretIcon)`
  position: absolute;
  font-size: 30px;
  color: ${colors.red};
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.white};
  opacity: 0.8;
  margin: 0 10px 0 10px;
`;

const KeylogggerMaliciousFlow = () => {
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Header>1. Atakujący infekuje urządzenie</Header>
          <ContentBody>
            <RelativeWrapper style={{ left: "20%" }}>
              <Usb style={{ left: "68px", top: "40px" }} />
              <Laptop />
            </RelativeWrapper>
            <User bad style={{ left: "50%" }} />
          </ContentBody>
          <Description>
            Atakujący infekuje urządzenie ofiary. W zależności od typu
            keyloggera, poprzez infekcję można rozumieć albo fizyczny kontakt
            celem podłączenia keyloggera sprzętowego, albo infekcję keylogerem
            programowym.
          </Description>
        </ContentWrapper>
        <VerticalLine />
        <ContentWrapper>
          <Header>2. Ofiara przesyła wrażliwe dane do atakującego</Header>
          <ContentBody>
            <RelativeWrapper style={{ left: "25%" }}>
              <Usb style={{ left: "68px", top: "40px" }} />
              <Laptop />
              <User style={{ left: "-85px" }} />
            </RelativeWrapper>
            <Arrow style={{ left: "47%" }} />
            <User bad style={{ right: "10%" }} />
          </ContentBody>
          <Description>
            Niczego nieświadoma ofiara używa komputera i jednocześnie przesyła
            wszystkie informacje wpisane na klawiaturze do atakującego. Bardziej
            zaawansowany keylogger może również przesyłać zrzuty ekranu.
          </Description>
        </ContentWrapper>
        <VerticalLine />
        <ContentWrapper>
          <Header>3. Atakujący otrzymuje wrażliwe dane ofiary</Header>
          <ContentBody>
            <RelativeWrapper style={{ left: "35%" }}>
              <Laptop bad />
              <SecretData style={{ left: "20px", top: "15px" }} />
            </RelativeWrapper>
            <User bad style={{ right: "25%" }} />
          </ContentBody>
          <Description>Dane przesyłane są do atakującego co pewien okres czasu. Atakujący może próbować wykorzystać te dane do uzyskania nieautoryzowanego dostępu do różnych serwisów webowych.</Description>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default KeylogggerMaliciousFlow;
