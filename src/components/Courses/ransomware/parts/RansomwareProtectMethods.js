import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";

import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
  ContentBody,
  Victim,
  Laptop,
  Trust,
  FlexCenterWrapper,
  Backup,
  Antivirus,
} from "../styles.js";

const RansomwareProtectMethods = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Container>
      <HeaderWrapper>
        <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
          Zasada ograniczonego zaufania
        </Button>
        <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
          Kopia zapasowa
        </Button>
        <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
          Antywirus, aktualizacje
        </Button>
      </HeaderWrapper>
      {activeSlide === 0 && (
        <ContentWrapper>
          <ContentHeader>
            Zasada ograniczonego zaufania w firmach polega na dostarczeniu
            pracownikom dostępu do tych elementów systemu, które są im niezbędne
            do pracy. Wszystko, do czego nie potrzebują dostępu, powinno być
            domyślnie <strong>zablokowane</strong>. Zasada ta może być również
            używana do analizy każdego przychodzącego maila, pobranego pliku czy
            odebranego SMSa.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Trust
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
              <Victim />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
            Tworzenie kopii zapasowych polega na okresowym zapisywaniu danych,
            ewentualnej kompresji i przeniesieniu na inne urządzenie lub usługę
            chmurową. W przypadku firm kopia zapasowa może również obejmować
            infrastrukturę aplikacyjną, bazy danych, czy inne ważne dokumenty.{" "}
            <br />
            <br />W momencie infekcji wirusem ransomware, rozwiązaniem problemu
            będzie przywrócenie stanu systemu sprzed momentu infekcji. Należy
            jednak pamiętać o tym, iż w rzadkich przypadkach, ransomware może
            również dostać się do miejsca, w którym znajdują się zarchiwizowane
            dane, jednocześnie je szyfrując, i odbierając tę możliwość.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Backup
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
              <Victim />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
            Jedną z najlepszych metod zapobiegania infekcji ransomware jest
            stosowanie dobrego antywirusa oraz częste aktualizacje wszystkich
            programów i systemu operacyjnego.
            <br />
            <br />W sytuacji, w której ransomware trafi do urządzenia, dobry
            antywirus może przeanalizować zawartość złośliwego pliku i często
            nie pozwoli użytkownikowi go uruchomić.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Antivirus
                style={{ position: "absolute", top: "35px", left: "45px" }}
              />
              <Laptop />
              <Victim />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default RansomwareProtectMethods;
