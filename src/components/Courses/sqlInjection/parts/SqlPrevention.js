import styled, { css } from "styled-components";
import colors from "constans/colors.js";

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

  
const SqlPrevention = () => {
  const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Container>
        <HeaderWrapper>
          <Button active={activeSlide === 0} onClick={() => setActiveSlide(0)}>
            Walidacja danych wejściowych
          </Button>
          <Button active={activeSlide === 1} onClick={() => setActiveSlide(1)}>
            Parametryzowanie zapytań
          </Button>
          <Button active={activeSlide === 2} onClick={() => setActiveSlide(2)}>
            Ograniczenie dostępu
          </Button>
        </HeaderWrapper>
        {activeSlide === 0 && (
          <ContentWrapper>
            <ContentHeader>
          Każde dane, które pochodzą od użytkownika, powinny być najpierw sprawdzone pod kątem występowania dozwolonych znaków (np. A-Z, a-z), albo nie występowania znaków nie dozwolonych (np. ', ", -). Dzięki temu atakujący nie będzie w stanie złośliwie zmodyfikować zapytania SQL. 
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
              Parametryzowanie zapytań polega na przygotowaniu zapytania bazodanowego i parametrów znajdujących się w nim, a następnie przesłanie tych informacji do silnika bazy danych. Silnik, na bazie dostarczonych mu informacji sam skonstruuje zapytanie. W przypadku błędów składniowych spowodowanych np. znakami specjalnymi silnik zwróci błąd.  
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
              Kolejnym rozwiązaniem może być stworzenie roli dostępu tylko do odczytu dla bazy danych, a następnie nadanie tej roli w połączeniu dla najbardziej wrażliwych funkcji, które mają za zadanie jedynie zwrócić dane. Pomoże to w sytuacji, kiedy atakujący będzie próbował zmodyfikować strukturę bazy lub jej dane, jednak nadal pozwoli na wykradnięcie nadmiernych wrażliwych danych.
              <Line />
            </ContentHeader>
            <FlexCenterWrapper>
              <ContentBody>
              </ContentBody>
            </FlexCenterWrapper>
          </ContentWrapper>
        )}
      </Container>
    )
}

export default SqlPrevention
