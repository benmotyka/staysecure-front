import styled from "styled-components";
import colors from "constans/colors";

import { Line } from "components/PreviewItems/PreviewItems.styles";

const AbsctractionLayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.h3`
  color: ${colors.white};
  font-size: 24px;
  margin: 0 0 10px 0;
  text-align: center;
`;

const Description = styled.p`
  color: ${colors.white};
  font-size: 16px;
  margin: 0;
  text-align: center;
`

const CodeExample = styled.samp`
color: ${colors.white};
font-size: 18px;
`

const SqlApiAbstractionLayers = () => {
  return (
    <AbsctractionLayersContainer>
      <RelativeWrapper>
        <Header>Najwyższy poziom abstrakcji</Header>
        <Description>Mapowanie relacyjno obiektowe (ang. Object-relational mapping), polega na skonwertowaniu danych z tabel w relacyjnej bazie danych na obiekty, znane z programowania obiektowego. Przy tworzeniu zapytań, pozwalają na praktycznie całkowitą redukcję składni SQL na rzecz języka, w którym są stworzone. Przykładowe pobranie danych w ORM Sequelize wygląda następująco:<br/><br/>
        <CodeExample>{`Client.findAll({
            where: {
                name: 'Jan',
                surname: 'Kowalski'
            }
        })`}

        </CodeExample>
        </Description>
      </RelativeWrapper>
      <Line />
      <RelativeWrapper>
        <Header>Średni poziom abstrakcji</Header>
        <Description>Konstruktory kwerend (ang. query builders), zaprojektowane w celu uproszczenia komunikacji z bazą - zapytania nie są tworzone w języku SQL, a w języku, w którym zaimplementowany jest dany konstruktor. Łatwiejsze do zmodyfikowania i raz stworzone zapytanie może być używane na wielu typach baz danych. Przykładowe zapytanie wykonane w konstruktorze kwerend Knex.js wygląda następująco:<br/><br/>
        <CodeExample>knex('clients').select('*').where('name', 'Jan').andWhere('surname', 'Kowalski')</CodeExample>
        </Description>
      </RelativeWrapper>
      <Line />
      <RelativeWrapper>
        <Header>Najniższy poziom abstrakcji</Header>
        <Description>Zapytania tworzone w czystym SQL i przekazywane do bazy danych. Są dosyć proste w tworzeniu, jednak kosztem prostoty często podatne na atak SQL Injection, błędy programisty. Zazwyczaj nie są kompatybilne z innymi typami baz. Przykładowe zapytanie SQL wygląda następująco:<br/><br/>
        <CodeExample>SELECT * FROM clients WHERE name = 'Jan' AND surname = 'Kowalski'</CodeExample>

        </Description>

      </RelativeWrapper>
    </AbsctractionLayersContainer>
  );
};

export default SqlApiAbstractionLayers;
