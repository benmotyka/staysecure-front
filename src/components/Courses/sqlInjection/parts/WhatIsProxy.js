import React from "react";

import styled, {css} from "styled-components";
import colors from "constans/colors";
import { ImArrowDown as ArrowDownIcon } from "react-icons/im";
import { MdComputer as ClientIcon } from "react-icons/md";
import { VscServerProcess as ProxyIcon, VscGlobe as InternetIcon } from "react-icons/vsc";

const BigIcon = css`
  font-size: 100px;
  color: ${colors.orange};
`

const InfoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px 1fr 50px 1fr;
  grid-template-columns: 1fr;
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
`;

const Internet = styled(InternetIcon)`
${BigIcon};
`

const Container = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr;
width: 100%;
height: 100%;
`

const DetailsColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
`

const requestBody = `
POST /api/s-i HTTP/2
Host: simplebuy.io
Cookie: locale=en; country=en; currency=PLN; region=pl; _ga=GA1.2.142609592.1639261852; _gid=GA1.2.631117408.1639261852; _fbp=fb.1.1639261852283.225264804; _gat=1; __cf_bm=c8hi5o6KjqQ0nD98JDip.FKRBK.ZzttEnTNSNACsL68-1639261852-0-ATCqq3dLT89Ocgi8r3uQs89IzTDrTISht0G659DRgvApRLtMX4AfN0BT3p25vXnkb0m/v+P5EDUMUxytOaB8NPmIPbIBJos4CocqAIX+GvSVtQp/KVQutShmEUUvcGBxcUY7j8eUvDGKU8kS5NM59L4=
Content-Length: 628
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="92"
Accept: application/json, text/plain, */*
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36
Content-Type: application/json;charset=UTF-8
Origin: https://simplebuy.io
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://simplebuy.io/login
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

{"email":"jdaslkdjaslk@wp.pl","password":"jldksjalkdasjlkda","captcha":"03AGdBq24wGhWznHtm6lsXZ_Ap9BFoUESckGa0LqsNGy8FX7vUxkTEWkLdbwnVJ4MBO9WO7vK2_H5YjPVYrXht0Iydt67HYv6qtBLLRgNsCbYp2OEsKPeWgO5AC0-ZTOjWyvm6HVqc72gBiQGdfvgBACfeEwSNlI3_xjIEpzHiq7uvhiHDVrqGGRZFYypd07Qi5AcGV4Y1zjZ0RcBbZ_B4698n2T7F9dJ1et675FSPnBFJJPpRtpzL4E7QEbDtxFsXls-e44u2E5MH47dCB6WNlbPsV6PG2aEPVN4wtJZ3tRkldg8_K1_bjzf6zC0ZM2f_T0eFDCnrtzGFcb4jQFspEwM8t5nEHTQBe80Y315mkx_vODwpXRSzByneUBPPzKZVysA8no13GRJ31XqqPrnRntUodBo47KnuWI-CtWHJGNXQwlZlMqbOOD7dJJy388rSby5wvSxPlmKzMO8M42uus5P0rJxQHBeqaBflAqh5y4CCoyLRMZ9oi1c","fingerprint":"7894db68a4ef067f6f58b756b6e261dc"}
`

const WhatIsProxy = () => {
  return (
      <Container>
    <InfoColumn>
      <Wrapper>
        <Client />
        <Header>GET HTTP 2.0</Header>
      </Wrapper>
      <Wrapper>
        <ArrowRight />
      </Wrapper>
      <Wrapper>
        <Proxy />
        <Header>Serwer Proxy</Header>
      </Wrapper>
      <Wrapper>
        <ArrowRight />
      </Wrapper>
      <Wrapper>
          <Internet/>
        <Header>Internet</Header>
      </Wrapper>
    </InfoColumn>
    <DetailsColumn>
        <Wrapper>siema</Wrapper>
        <Wrapper>siema</Wrapper>
        <Wrapper>siema</Wrapper>
    </DetailsColumn>
    </Container>
  );
};

export default WhatIsProxy;
