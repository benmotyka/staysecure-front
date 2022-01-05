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
              Uwierzytelnianie dwuskładnikowe (2FA) jest powszechnie używane w sieci. Pozwala na zabezpieczenie konta dodatkowym etapem logowania się, którym może być np. kod w wiadomości SMS, lub z oficjalnej aplikacji (Google Authenticator). Dzięki temu, aby zalogować się na wybrane konto, nie wystarczy tylko login i hasło a dodatkowo kod SMS.
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}
        {activeSlide === 1 && (
          <ContentWrapper>
            <ContentHeader>
              Filtry antyspamowe analizują treść wiadomości pod kątem bezpieczeństwa i odpowiednio ją klasyfikują. Sprawdzana jest między innymi ilość typowych słów kluczowych dla podejrzanych wiadomości, występowanie odnośników do innych stron czy zaufanie domeny wysyłającego.<br/><br/>Pozwalają one na znaczne ograniczenie otrzymywanych podejrzanych wiadomości, co bezpośrednio zmniejsza ryzyko ataku phishingowego.  
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}{" "}
        {activeSlide === 2 && (
          <ContentWrapper>
            <ContentHeader>
              Stosowanie dobrej polityki haseł nie tylko w firmach, ale również w codziennym użytkowaniu komputera jest kluczem w ochronie, i potencjalnym zniwelowaniu efektów ataku phishingowego. <br/><br/> Najważniejszą zasadą, której należy się trzymać, rejestrując się w wybranym serwisie, jest unikalność danych - <strong>każde hasło powinno być unikalne dla każdej witryny.</strong> Dzięki temu nawet jeśli nasze dane zostaną skradzione, atakujący nie będzie miał dostępu do wszystkich serwisów, z których korzystamy. Dobrym pomysłem są także okresowe zmiany haseł do wszystkich serwisów.<br/><br/> Powyższe reguły mogą zostać osiągnięte z pomocą wybranego <strong>menedżera haseł</strong>, w którym będą znajdywały się wszystkie zapisane hasła, w zaszyfrowanej postaci.
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}
{activeSlide === 3 && (
          <ContentWrapper>
            <ContentHeader>
              Zanim odwiedzisz adres strony internetowej zawartej w wiadomości email czy SMS, należy dokładnie mu się przyjrzeć, oraz zwrócić uwagę czy sama wiadomość pochodzi od zaufanego źródła, nie ma błędów ortograficznych i interpunkcyjnych.<br/><br/> 
              Zachowanie uwagi i analizowanie szczegółów jest istotnym elementem ochrony przed atakami phishingowymi. Elementami, które świadczyć mogą o tym, że dana strona może być stworzona w celu ataku phishingowego, to między innymi: nieprawidłowy adres URL strony (literówka), brak połączenia szyfrowanego (HTTPS - brak kłódki przy adresie URL),
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}
      </Container>
    );
  };
  
  export default PhishingProtection;
  