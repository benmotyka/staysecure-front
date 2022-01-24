import styled, { css } from "styled-components";
import colors from "constans/colors.js";

import { Line } from "components/PreviewItems/PreviewItems.styles.js";
import { useState } from "react";
import {} from "react-icons/bs";
import { AiFillWarning as WarningIcon } from "react-icons/ai";

import {
  Container,
  HeaderWrapper,
  Button,
  ContentWrapper,
  ContentHeader,
  ContentBody,
  FlexCenterWrapper,
} from "../../ransomware/styles.js";
import { IoIosArrowForward as ArrowIcon } from "react-icons/io";
import {
  BsShieldFillCheck as CheckIcon,
  BsLaptop as LaptopIcon,
} from "react-icons/bs";
import {
  FaRegFileCode as EncodeIcon,
  FaServer as ServerIcon,
} from "react-icons/fa";

const RelativeContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Encode = styled(EncodeIcon)`
  font-size: 120px;
  color: ${colors.white};
  position: absolute;
  top: -10px;
`;

const Arrow = styled(ArrowIcon)`
  color: ${colors.white};
  font-size: 60px;
  margin: 0 30px;
`;

const Check = styled(CheckIcon)`
  font-size: 60px;
  color: ${colors.lightGreen};
  position: absolute;
  right: -25px;
  top: -30px;
`;

const Server = styled(ServerIcon)`
  font-size: 120px;
  color: ${colors.white};
`;

const CodeText = styled.samp`
  font-size: 18px;
  color: ${colors.white};
`;

const LaptopCodeText = styled.samp`
  font-size: 13px;
  color: ${colors.orange};
  position: absolute;
  bottom: 55px;
`;

const Laptop = styled(LaptopIcon)`
  font-size: 150px;
  color: ${colors.white};
`;

const Warning = styled(WarningIcon)`
  font-size: 50px;
  color: ${colors.orange};
  position: absolute;
  top: 30px;
`;

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
            Każde dane, które pochodzą od użytkownika, powinny być najpierw
            sprawdzone pod kątem występowania dozwolonych znaków (np. A-Z, a-z),
            albo nie występowania znaków nie dozwolonych (np. ', ", -). Dzięki
            temu atakujący nie będzie w stanie złośliwie zmodyfikować zapytania
            SQL.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <RelativeContainer>
                <Encode />
                <Check />
              </RelativeContainer>
              <Arrow />
              <Server />
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
      {activeSlide === 1 && (
        <ContentWrapper>
          <ContentHeader>
            Parametryzowanie zapytań polega na przygotowaniu zapytania
            bazodanowego i parametrów znajdujących się w nim, a następnie
            przesłanie tych informacji do silnika bazy danych. Silnik, na bazie
            dostarczonych mu informacji sam skonstruuje zapytanie. W przypadku
            błędów składniowych spowodowanych np. znakami specjalnymi silnik
            zwróci błąd.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <CodeText>
                const clientName = req.body.name
                <br />
                <br />
                const sql = "SELECT * FROM clients WHERE name = $1"
                <br />
                <br />
                const values = [clientName]
                <br />
                <br />
                const result = await db.query(sql, values)
                <br />
                <br />
              </CodeText>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}{" "}
      {activeSlide === 2 && (
        <ContentWrapper>
          <ContentHeader>
            Kolejnym rozwiązaniem może być stworzenie roli dostępu tylko do
            odczytu dla bazy danych, a następnie nadanie tej roli w połączeniu
            dla najbardziej wrażliwych funkcji, które mają za zadanie jedynie
            zwrócić dane. Pomoże to w sytuacji, kiedy atakujący będzie próbował
            zmodyfikować strukturę bazy lub jej dane, jednak nadal pozwoli na
            wykradnięcie nadmiernych wrażliwych danych.
            <Line />
          </ContentHeader>
          <FlexCenterWrapper>
            <ContentBody>
              <Warning />
              <Laptop />
              <LaptopCodeText>ACCESS DENIED</LaptopCodeText>
            </ContentBody>
          </FlexCenterWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default SqlPrevention;
