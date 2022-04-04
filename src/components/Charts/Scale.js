import React from "react";
import {
  ScaleChartContainer,
  CorrectWrapper,
  WrongWrapper,
  TextWrapper
} from "components/Charts/Charts.styles";

const Scale = (props) => {
  return (
    <ScaleChartContainer>
      <CorrectWrapper width={`${props.scorePercentage}%`}/>
      <WrongWrapper/>
      <TextWrapper left={`${props.scorePercentage}%`}>{props.scorePercentage}%</TextWrapper>
    </ScaleChartContainer>
  );
};

export default Scale;
