import React from "react";
import Parser from 'html-react-parser';

import styled, {css} from "styled-components";
import colors from "constans/colors";
import { ImArrowDown as ArrowDownIcon } from "react-icons/im";
import { MdComputer as ClientIcon } from "react-icons/md";
import { VscServerProcess as ProxyIcon, VscServer as InternetIcon } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const BigIcon = css`
  font-size: 100px;
  color: ${colors.orange};
`

const InfoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px 1fr 50px 1fr;
  grid-template-columns: 1fr;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ArrowRight = styled(ArrowDownIcon)`
  color: ${colors.white};
  font-size: 35px;
`;

const Client = styled(ClientIcon)`
${BigIcon};
`;

const Proxy = styled(ProxyIcon)`
${BigIcon};
`;

const Header = styled.p`
  font-size: 20px;
  color: ${colors.white};
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

const Internet = styled(InternetIcon)`
${BigIcon};
`

const Container = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 30% 70%;
`

const DetailsColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
`

const RequestText = styled.samp`
color: ${colors.white};
font-size: ${colors.white};
`

const Description = styled.p`
font-size: 14px;
margin: 0;
color: ${colors.white};
text-align: center;
line-height: 16px;
`

const originalRequestBody = `
POST /api/search HTTP/2<br>
Host: sklep-internetowy.com<br>
Content-Type: application/json;charset=UTF-8<br>
Origin: https://sklep-internetowy.com<br>
{<br>
&nbsp;&nbsp;&nbsp;<span style="color: green">"value": "szukany_przedmiot"</span><br>
}
`

const changedRequestBody = `
POST /api/search HTTP/2<br>
Host: sklep-internetowy.com<br>
Content-Type: application/json;charset=UTF-8<br>
Origin: https://sklep-internetowy.com<br>
{<br>
&nbsp;&nbsp;&nbsp;<span style="color: red">"value": "' or 1=1 --"</span><br>
}
`

const finalRequestBody = `
POST /api/search HTTP/2<br>
Host: sklep-internetowy.com<br>
Content-Type: application/json;charset=UTF-8<br>
Origin: https://sklep-internetowy.com<br>
{<br>
&nbsp;&nbsp;&nbsp;<span>"value": "' or 1=1 --"</span><br>
}
`

const WhatIsProxy = () => {
  const {t} = useTranslation()

  return (
      <Container>
    <InfoColumn>
      <Wrapper>
        <Client />
        <Header>{t('courses.sql.proxyHeader1')}</Header>
        <Description>{t('courses.sql.proxyAnswer1')}</Description>
      </Wrapper>
      <Wrapper>
        <ArrowRight />
      </Wrapper>
      <Wrapper>
        <Proxy />
        <Header>{t('courses.sql.proxyHeader2')}</Header>
        <Description>{t('courses.sql.proxyAnswer2')}</Description>
      </Wrapper>
      <Wrapper>
        <ArrowRight />
      </Wrapper>
      <Wrapper>
          <Internet/>
        <Header>{t('courses.sql.proxyHeader3')}</Header>
        <Description>{t('courses.sql.proxyAnswer3')}</Description>
      </Wrapper>
    </InfoColumn>
    <DetailsColumn>
        <Wrapper><RequestText>{Parser(originalRequestBody)}</RequestText></Wrapper>
        <Wrapper><RequestText>{Parser(changedRequestBody)}</RequestText></Wrapper>
        <Wrapper><RequestText>{Parser(finalRequestBody)}</RequestText></Wrapper>
    </DetailsColumn>
    </Container>
  );
};

export default WhatIsProxy;
