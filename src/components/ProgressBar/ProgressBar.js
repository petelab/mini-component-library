/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius:4
  },
  medium: {
    height: 12,
    padding: 0,
    radius:¤
  },
  large: {
    height: 16,
    padding: 4,
    radius:8
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error("unknown size passed to progreessbar");
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--padding": styles.padding + "px",
      "--radius": styles.radius + "px" }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden; /* trim off corners when progressbar is near full*/
`;
const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  padding: var(--padding);
  border-radius:var(--radius);
`;
const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;
export default ProgressBar;
