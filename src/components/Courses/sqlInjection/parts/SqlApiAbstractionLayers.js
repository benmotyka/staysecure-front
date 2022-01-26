import styled from "styled-components";
import colors from "constans/colors";

import { Line } from "components/PreviewItems/PreviewItems.styles";
import { useTranslation } from "react-i18next";

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
  const {t} = useTranslation()

  return (
    <AbsctractionLayersContainer>
      <RelativeWrapper>
        <Header> {t('courses.sql.sqlApiAbstractionHeader1')}</Header>
        <Description>{t('courses.sql.sqlApiAbstractionAnswer1')}<br/><br/>
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
        <Header>{t('courses.sql.sqlApiAbstractionHeader2')}</Header>
        <Description>{t('courses.sql.sqlApiAbstractionAnswer2')}<br/><br/>
        <CodeExample>knex('clients').select('*').where('name', 'Jan').andWhere('surname', 'Kowalski')</CodeExample>
        </Description>
      </RelativeWrapper>
      <Line />
      <RelativeWrapper>
        <Header>{t('courses.sql.sqlApiAbstractionHeader3')}</Header>
        <Description>{t('courses.sql.sqlApiAbstractionAnswer3')}<br/><br/>
        <CodeExample>SELECT * FROM clients WHERE name = 'Jan' AND surname = 'Kowalski'</CodeExample>

        </Description>

      </RelativeWrapper>
    </AbsctractionLayersContainer>
  );
};

export default SqlApiAbstractionLayers;
