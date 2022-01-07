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

import { AiFillWarning as WarningIcon } from "react-icons/ai";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import {MdError as SpamBlockIcon,
  MdOutlinePassword as PasswordIcon,
  MdMessage as MessageIcon,
  MdPolicy as PolicyIcon
} from "react-icons/md"
import {IoIosArrowForward as ArrowIcon} from "react-icons/io"

import {
  FaUser as UserIcon,
  FaLock as LockIcon
} from "react-icons/fa";
import styled, { css } from "styled-components";
import colors from "constans/colors.js";

const Warning = styled(WarningIcon)`
font-size: 60px;
color: ${colors.orange};
position: absolute;
left: 65%;
top: 35px;
`;

const User = styled(UserIcon)`
font-size: 150px;
color: ${colors.white};

`

const Laptop = styled(LaptopIcon)`
font-size: 150px;
color: ${colors.white};
`

const SpamBlock = styled(SpamBlockIcon)`
font-size: 40px;
position: absolute;
color: ${colors.red};
top: 20%;
right: 19%;
`

const Message = styled(MessageIcon)`
color: ${colors.white};
font-size: 50px;
position: absolute;
left: 34%;
z-index: -1;
top: 30%;
`

const Password = styled(PasswordIcon)`
color: ${colors.white};
font-size: 100px;
`

const Arrow = styled(ArrowIcon)`
color: ${colors.white};
font-size: 60px;
margin: 0 30px;
`

const Image = styled.img`
width: 100px;
`

const Policy = styled(PolicyIcon)`
font-size: 90px;
position: absolute;
right: -10px;
top: 40%;
color: ${colors.orange};
`

const Lock = styled(LockIcon)`
font-size: 120px;
color: ${colors.white};
`

const PhishingProtection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper columns={4}>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          Uwierzytelnianie dwuskładnikowe
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          Filtry antyspamowe
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
          Polityki haseł
        </Button>
        <Button active={activeSlide === 3} onClick={() => setActiveSlide(3)}>
          Zachowanie uwagi
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
            Uwierzytelnianie dwuskładnikowe, znane także jako 2FA jest
            powszechnie używane w sieci. Pozwala na zabezpieczenie konta
            dodatkowym etapem logowania się, którym może być np. kod w
            wiadomości SMS, lub z oficjalnej aplikacji (Google Authenticator).
            Dzięki temu, aby zalogować się na wybrane konto, nie wystarczy tylko
            login i hasło a dodatkowo kod 2FA.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Password/>
              <Arrow/>
              <Image src="courses/2fa.png"/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
            Filtry antyspamowe analizują treść wiadomości pod kątem
            bezpieczeństwa i odpowiednio ją klasyfikują. Sprawdzana jest między
            innymi ilość typowych słów kluczowych dla podejrzanych wiadomości,
            występowanie odnośników do innych stron czy zaufanie domeny
            wysyłającego.
            <br />
            <br />
            Pozwalają one na znaczne ograniczenie otrzymywanych podejrzanych
            wiadomości, co bezpośrednio zmniejsza ryzyko ataku phishingowego.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Laptop/>
              <SpamBlock/>
              <Message/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
            Stosowanie dobrej polityki haseł nie tylko w firmach, ale również w
            codziennym użytkowaniu komputera jest kluczem w ochronie, i
            potencjalnym zniwelowaniu efektów ataku phishingowego. <br />
            <br /> Najważniejszą zasadą, której należy się trzymać, rejestrując
            się w wybranym serwisie, jest unikalność danych -{" "}
            <strong>
              każde hasło powinno być unikalne dla każdej witryny.
            </strong>{" "}
            Dzięki temu nawet jeśli nasze dane zostaną skradzione, atakujący nie
            będzie miał dostępu do wszystkich serwisów, z których korzystamy.
            Dobrym pomysłem są także okresowe zmiany haseł do wszystkich
            serwisów.
            <br />
            <br /> Powyższe reguły mogą zostać osiągnięte z pomocą wybranego{" "}
            <strong>menedżera haseł</strong>, w którym będą znajdywały się
            wszystkie zapisane hasła, w zaszyfrowanej postaci.
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
      {activeSlide === 3 && (
        <ContentWrapper>
          <ContentHeader>
            Zanim odwiedzisz adres strony internetowej zawartej w wiadomości
            email czy SMS, należy dokładnie mu się przyjrzeć, oraz zwrócić uwagę
            czy sama wiadomość pochodzi od zaufanego źródła, nie ma błędów
            ortograficznych i interpunkcyjnych.
            <br />
            <br />
            Zachowanie uwagi i analizowanie szczegółów jest istotnym elementem
            ochrony przed atakami phishingowymi. Elementami, które świadczyć
            mogą o tym, że dana strona może być stworzona w celu ataku
            phishingowego, to między innymi: nieprawidłowy adres URL strony
            (literówka), brak połączenia szyfrowanego (HTTPS - brak kłódki przy
            adresie URL).
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Warning/>
              <User/>
              <Laptop/>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default PhishingProtection;
