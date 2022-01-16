import styled from "styled-components";
import colors from "constans/colors";

import { GiUsbKey as UsbIcon } from "react-icons/gi";
import { MdSettingsApplications as AppIcon } from "react-icons/md";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 49% 2% 49%;
  grid-template-rows: 1fr;
  padding: 25px 0;
`;

export const VerticalLine = styled.hr`
  width: 0;
  height: 100%;
  opacity: 10%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

export const Header = styled.h4`
  color: ${colors.orange};
  font-size: 25px;
  margin-bottom: 0;
`;

export const Usb = styled(UsbIcon)`
  font-size: 100px;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const App = styled(AppIcon)`
  font-size: 100px;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.white};
  margin: 5px auto 5px 40px;
  opacity: 0.8;
`;

const KeyloggerTypes = () => {
  return (
    <Container>
      <BodyWrapper>
        <ContentWrapper>
          <Header>Sprzętowy</Header>
          <Usb />
          <Description>- Dostaje się na urządzenie poprzez fizyczne podłączenie</Description>
          <Description>- Działa na warstwie urządzenia</Description>
          <Description>
            - Łatwy w identyfikacji dla użytkownika, trudny dla antywirusa
          </Description>
          <Description>
              - Łatwiejszy do usunięcia
          </Description>
        </ContentWrapper>
        <VerticalLine />
        <ContentWrapper>
          <Header>Programowy</Header>
          <App />
          <Description>- Dostaje się na urządzenie poprzez uruchomienie złośliwego skryptu, aplikacji</Description>
          <Description>- Działa na warstwie systemu operacyjnego</Description>
          <Description>
            - Trudny w identyfikacji dla użytkownika, łatwy dla antywirusa
          </Description>
          <Description>
              - Ciężko go usunąć
          </Description>
        </ContentWrapper>
      </BodyWrapper>
    </Container>
  );
};

export default KeyloggerTypes;
