import styled, { css } from "styled-components";
import colors from "constans/colors.js";
import { FaUser as UserIcon } from "react-icons/fa";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import { CgUsb as PendriveIcon } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Icon = css`
  font-size: 150px;
  color: white;
`;

const User = styled(UserIcon)`
  ${Icon};
`;

const Wrapper = styled.div`
  position: relative;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hacker = styled(UserIcon)`
  ${Icon};
  color: red;
`;

const Laptop = styled(LaptopIcon)`
  ${Icon};
  font-size: 250px;
`;

const U2F = styled(PendriveIcon)`
  ${Icon};
  font-size: 60px;
  transform: rotate(270deg);
  color: ${colors.orange};
`;

const LaptopText = styled.p`
  font-size: 20px;
  color: ${colors.white};
  position: absolute;
  top: 15%;
  left: 15%;
`;

const U2FInLaptop = styled(PendriveIcon)`
  ${Icon};
  transform: rotate(270deg);
  position: absolute;
  top: 35%;
  left: 35%;
  color: ${colors.orange};
  font-size: 70px;
`;
const U2FKeys = () => {
  const {t} = useTranslation()

  return (
    <Container>
      <UserWrapper>
        <User />
        <U2F />
      </UserWrapper>
      <Wrapper>
        <Laptop />
        <LaptopText>{t('courses.phishing.neededKey')}</LaptopText>
        <U2FInLaptop />
      </Wrapper>
      <UserWrapper>
        <Hacker />
      </UserWrapper>
    </Container>
  );
};

export default U2FKeys;
