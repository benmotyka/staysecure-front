import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";

import {Container, HeaderWrapper, Button, ContentWrapper, ContentHeader, ContentBody, BadUser, Victim, Arrow, RelativeContainer, Laptop, BadMail, App} from "../styles.js"

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
          <Line />
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
          <Line />
          </ContentHeader>
          <ContentBody>
            <BadUser/>
            <Arrow/>
            <BadMail/>
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
            Atakujący znajduje lukę w programie, który uruchomiła ofiara lub serwer. Luka ta pozwala na zdalne wykonanie kodu na urzadzeniu końcowym - co wiązać się może z pobraniem, a następnie uruchomieniem ransomware przez atakującego. 
          <Line />
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
