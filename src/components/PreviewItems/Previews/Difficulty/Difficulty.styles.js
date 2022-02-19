import styled from "styled-components";
import colors from "constans/colors";
export const Container = styled.span(
  (props) =>
    ({
      color = props.easy
        ? colors.lightGreen
        : props.medium
        ? colors.orange
        : colors.red,
    }) =>
      `
padding: 2px 5px;
border-radius: 10px;
font-size: 10px;
border: 1px solid ${color};
margin-left: 8px;
color: ${color};
`
);
