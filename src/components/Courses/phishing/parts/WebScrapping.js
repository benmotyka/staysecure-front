import styled, { css } from "styled-components";
import colors from "constans/colors.js";

import { ImDownload3 as DownloadIcon } from "react-icons/im";
import { IoArrowRedoOutline as ArrowIcon } from "react-icons/io5";
import { BiWorld as WebpageIcon } from "react-icons/bi";
import { Line } from "components/PreviewItems/PreviewItems.styles";
import { useTranslation } from "react-i18next";

import { ContentHeader } from "components/Courses/ransomware/styles";

const Icon = css`
  font-size: 100px;
  color: ${colors.white};
`;

const Download = styled(DownloadIcon)`
  ${Icon};
`;
const Webpage = styled(WebpageIcon)`
  ${Icon};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const HeaderWrapper = styled.div`
  padding: 15px;
  margin-bottom: 100px;
`;
const Arrow = styled(ArrowIcon)`
  transform: rotate(30deg);
  color: ${colors.orange};
  font-size: 75px;
  position: absolute;
  top: 10%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 25% 15% 25%;
  height: 40%;
  grid-template-rows: 1fr;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WebScrapping = () => {
  const {t} = useTranslation()

  return (
    <Container>
      <HeaderWrapper>
        <ContentHeader>{t('courses.phishing.webScrappingDescription')}</ContentHeader>
        <Line />
      </HeaderWrapper>
      <Wrapper>
        <Item>
          <Webpage />
          <Download />
        </Item>
        <Item>
          <Arrow />
        </Item>
        <Item>
          <Webpage />
          <Download />
        </Item>
        <Item>
          <Arrow />
        </Item>
        <Item>
          <Webpage />
          <Download />
        </Item>
      </Wrapper>
    </Container>
  );
};

export default WebScrapping;
