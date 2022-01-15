import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";

import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
  ContentBody,
  FlexCenterWrapper,
} from "../../ransomware/styles.js";

import { BsLaptop as LaptopIcon } from "react-icons/bs";
import {SiAdblock as AntivirusIcon} from "react-icons/si"
import {
  MdOutlinePassword as PasswordIcon,
  MdPolicy as PolicyIcon,
} from "react-icons/md";
import { IoIosArrowForward as ArrowIcon } from "react-icons/io";

import {FaLock as LockIcon } from "react-icons/fa";
import styled from "styled-components";
import colors from "constans/colors.js";


const Laptop = styled(LaptopIcon)`
  font-size: 150px;
  color: ${colors.white};
`;

const Password = styled(PasswordIcon)`
  color: ${colors.white};
  font-size: 100px;
`;

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Image = styled.img`
  width: 100px;
`;

const Policy = styled(PolicyIcon)`
  font-size: 90px;
  position: absolute;
  right: -10px;
  top: 40%;
  color: ${colors.orange};
`;

const Antivirus = styled(AntivirusIcon)`
  font-size: 60px;
  color: ${colors.red};
`;

const Lock = styled(LockIcon)`
font-size: 120px;
color: ${colors.white};
`


const KeyloggerProtectionMethods = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          Korzystanie z menedżera haseł
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          Uwierzytelnianie dwuskładnikowe
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
          Używanie antywirusa
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
            Menedżer haseł to program, który pozwala użytkownikowi na
            przechowywanie danych dostępowych w zaszyfrowanej formie. Wydawać by
            się mogło, iż trzymanie wszystkich haseł w jednym miejscu jest złym
            pomysłem, jednak do odblokowania tego programu wymagane jest podanie
            głównego hasła.
            <br />
            <br />
            Trzymając dane dostępowe w tym programie, nie musimy pamiętać o
            danych logowania dla każdej strony. Dodatkowo nie ma konieczności
            wpisywania ich na nowo - wystarczy je skopiować z programu. Używanie
            menedżera haseł sprawia, że urządzenie zainfekowane keyloggerem
            nasłuchującym klawiaturę nie będzie przesyłało atakującemu danych
            uwierzytelniających.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
            <Policy/>
              <Lock/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
            Uwierzytelnianie dwuskładnikowe, znane także jako 2FA jest
            powszechnie używane w sieci. Pozwala na zabezpieczenie konta
            dodatkowym etapem logowania się, którym może być np. kod w
            wiadomości SMS lub z oficjalnej aplikacji (Google Authenticator).
            Dzięki temu, aby zalogować się na wybrane konto, nie wystarczy tylko
            login i hasło a dodatkowo kod 2FA.
            <br />
            <br />
            Atakujący keylogerem, nie będzie w stanie wykorzystać danych
            uwierzytelniających ofiary, gdyż dostęp do konta będzie wymagał
            podania kodu 2FA.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Password />
              <Arrow />
              <Image src="courses/2fa.png" />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
          Zdecydowana większość antywirusów w wersji podstawowej posiada wbudowane mechanizmy przeciwdziałające atakom typu keylogger. Dodatkowo wyposażone są one w mechanizmy analizujące ruch wchodzący i wychodzący do sieci, co znacznie utrudni atakującemu zdobycie wrażliwych danych. 
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
          <ContentBody>
              <Antivirus
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default KeyloggerProtectionMethods;
