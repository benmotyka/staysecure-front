import styled, { css } from "styled-components";
import colors from "constans/colors.js";

export const Body = styled.div`
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999,
    0 0 30px 0px rgba(0, 0, 0, 0.7);
  border: 5px solid #d9dbdc;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 50px;
  height: 877px;
  width: 423px;
  position: relative;
  margin: 30px auto;
  transform: scale(0.8);
  margin-top: -50px;
  box-sizing: border-box;
`;

export const Top = styled.div`
  padding: 5px 110px 40px;
  position: relative;
`;

export const Speaker = styled.span`
  display: block;
  width: 70px;
  height: 6px;
  margin: 0 auto;
  border-radius: 6px;
  background: #292728;
`;

export const Camera = styled.span`
  display: block;
  margin: 0 auto;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 13px;
  background: #333;
`;

export const Sensor = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  float: left;
  background: #333;
  margin-top: -5px;
  border-radius: 50%;
`;

const Separator = css`
  display: block;
  width: 423px;
  height: 15px;
  border: {
    left: 5px solid #bbb;
    right: 5px solid #bbb;
  }
  position: absolute;
  left: -5px;
`;

export const TopSeparator = styled.div`
  ${Separator};
  top: 65px;
`;

export const BottomSeparator = styled.div`
  ${Separator};
  bottom: 65px;
`;

export const Screen = styled.div`
  background: #eee;
  border: 1px solid #fff;
  height: 677px;
  width: 375px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.9);
  border-radius: 3px;
  overflow: hidden;
`;

const Button = css`
  display: block;
  background: #ccc;
  position: absolute;
  border-radius: 2px 0px 0px 2px;
  cursor: pointer;
`;

export const PowerButton = styled.span`
  ${Button};
  height: 40px;
  width: 3px;
  top: 100px;
  left: -8px;
`;

const LeftSideButton = css`
  height: 60px;
  width: 5px;
  left: -10px;
`;

export const VolumeUpButton = styled.span`
  ${Button};
  ${LeftSideButton};
  top: 170px;
`;

export const VolumeDownButton = styled.span`
  ${Button};
  ${LeftSideButton};
  top: 250px;
`;

export const SleepButton = styled.span`
  ${Button};
  ${LeftSideButton};
  left: auto;
  right: -10px;
  top: 170px;
  border-radius: 0px 2px 2px 0px;
`;

export const Bottom = styled.div`
  padding: 15px 0 0;
`;

export const HomeButton = styled.span`
  display: block;
  margin: 0 auto;
  cursor: pointer;
  width: 68px;
  height: 68px;
  background: #ccc;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #303233 0%,
    #b5b7b9 50%,
    #f0f2f2 69%,
    #303233 100%
  );
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 4px;
  }
`;
