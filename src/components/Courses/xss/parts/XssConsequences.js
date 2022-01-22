import styled from "styled-components";
import colors from "constans/colors.js";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Item = styled.div`
  position: absolute;
  border-radius: 15px;
  border: 1px solid ${colors.hoverOrange};
  padding: 10px;
  background-color: ${colors.darkPurple};
`;

export const Description = styled.h4`
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
  opacity: 0.8;
  margin: 0;
`;

const XssConsequences = () => {
  return (
    <Container>
        <Item style={{ left: "10%", top: "40%" }}>
          <Description>Wykradnięcie danych</Description>
        </Item>
        <Item style={{ left: "10%", top: "12%" }}>
          <Description>Dostęp do kamerki internetowej ofiary</Description>
        </Item>
        <Item style={{ right: "10%", top: "12%" }}>
          <Description>Infekcja keyloggerem</Description>
        </Item>
        <Item style={{ left: "15%", bottom: "20%" }}>
          <Description>Phishing</Description>
        </Item>
        <Item style={{ right: "15%", bottom: "50%" }}>
          <Description>Podszywanie się pod ofiarę ataku</Description>
        </Item>
        <Item style={{ right: "15%", top: "25%" }}>
          <Description>Wykorzystanie urządzenia ofiary do kopania kryptowalut</Description>
        </Item>
        <Item style={{ left: "14%", bottom: "35%" }}>
          <Description>Nagrywanie mikrofonu ofiary</Description>
        </Item>
        <Item style={{ right: "15%", bottom: "25%" }}>
          <Description>Infekcja przeglądarki reklamami</Description>
        </Item>
        <Item style={{ right: "25%", bottom: "10%" }}>
          <Description>Pobranie wirusów na urządzenie ofiary</Description>
        </Item>
    </Container>
  );
};

export default XssConsequences;
