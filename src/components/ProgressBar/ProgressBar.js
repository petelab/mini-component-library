/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let Component;
  if (size === "small") {
    Component = SmallInner;
  } else if (size === "medium") {
    Component = MediumInner;
  } else {
    Component = StyledInner;
  }
  return (
    <StyledDiv pad={size === "medium" ? "5" : null}>
      <Component value={value} size={size} max="100">
        {/*  <strong>{value}</strong> */}
      </Component>
    </StyledDiv>
  );
};

const StyledInner = styled.progress`
  /* width: ${(props) => {
    return props.value + "%";
  }}; */
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  /*background-color: ${COLORS.primary};*/
  border-radius: ${(props) => (props.value > 99 ? "8px" : null)};
`;
const MediumInner = styled(StyledInner)`
  min-height: 12px;
`;
const SmallInner = styled(StyledInner)`
  min-height: 8px;
`;
const StyledDiv = styled.div`
  padding: 0px;
  /* padding: ${(props) => props.pad + "px"}; */
  background-color: hsla(0, 0%, 50%, 0.15);
  border-radius: 8px;
  width: 370px;
`;
export default ProgressBar;
