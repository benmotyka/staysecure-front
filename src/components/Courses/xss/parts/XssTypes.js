import { Line } from 'components/PreviewItems/PreviewItems.styles';
import colors from 'constans/colors';
import styled from 'styled-components'
import { useTranslation } from "react-i18next";

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
box-sizing: border-box;
padding: 10px 25px;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
`

const Header = styled.h3`
font-size: 20px;
text-align: center;
color: ${colors.white};
margin: 0 0 10px 0;
`

const Separator = styled(Line)`
margin: 0 0 15px 0;
`

const Description = styled.p`
font-size: 16px;
margin: 0;
color: ${colors.white};
opacity: 0.8;
`


const XssTypes = () => {
  const { t } = useTranslation();

  return <Container>
      <Wrapper>
          <Header>{t("courses.xss.reflectedXss")}</Header>
          <Description>{t("courses.xss.reflectedXssDescription1")}: <br/><br/><samp>http://staysecure.pl/search?q=xss+course</samp><br/><br/>{t("courses.xss.reflectedXssDescription2")}</Description>
      </Wrapper>
      <Separator/>
      <Wrapper>
      <Header>{t("courses.xss.storedXss")}</Header>
      <Description>{t("courses.xss.storedXssDescription")}</Description>
      </Wrapper>
      <Separator/>
      <Wrapper>
      <Header>{t("courses.xss.domBasedXss")}</Header>
      <Description>{t("courses.xss.domBasedXssDescription1")} <strong>{t("courses.xss.reflectedXss")}</strong>, {t("courses.xss.domBasedXssDescription2")}</Description>

      </Wrapper>
  </Container>;
};

export default XssTypes;
