import React, { useState } from "react";
import styled from "styled-components";
import colors from "../config/colorsBtn";

const StyledButton = styled.button`
  width: ${({ type }) => colors[type]?.width || "80px"};
  height: ${({ type }) => colors[type]?.height || "40px"};
  border-radius: ${({ type }) => colors[type]?.borderRadius || "12px"};
  font-family: Roboto;
  font-weight: 500;
  font-size: ${({ type }) => colors[type]?.fontSize || "16px"};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: ${({ type }) => colors[type]?.default || colors.primary.default};
  color: ${({ type }) => colors[type]?.text || colors.primary.text};
  border: ${({ type }) =>
    colors[type]?.border ? `1px solid ${colors[type].border}` : "none"};
  padding: ${({ type }) => colors[type]?.padding || "8px 16px"};
  gap: ${({ type }) => colors[type]?.gap || "8px"};

  &:hover {
    background: ${({ type }) => colors[type]?.hover || colors.primary.hover};
    color: ${({ type }) => colors[type]?.textHover || colors.primary.textHover};
    border: ${({ type }) =>
      colors[type]?.borderHover ? `1px solid ${colors[type].borderHover}` : "none"};
  }

  &:active {
    background: ${({ type }) => colors[type]?.pressed || colors.primary.pressed};
    color: ${({ type }) => colors[type]?.textPressed || colors.primary.textPressed};
    border: ${({ type }) =>
      colors[type]?.borderPressed ? `1px solid ${colors[type].borderPressed}` : "none"};
  }

  &:disabled {
    background: ${({ type }) => colors[type]?.disabled || colors.primary.disabled};
    color: ${({ type }) => colors[type]?.textDisabled || colors.primary.textDisabled};
    border: ${({ type }) =>
      colors[type]?.borderDisabled ? `1px solid ${colors[type].borderDisabled}` : "none"};
    cursor: not-allowed;
  }
`;

const Button = ({ children, type = "primary", ...props }) => {
  const [, setState] = useState("default");

  const handleClick = () => {
    if (props.disabled) return;
    setState("pressed");
    setTimeout(() => setState("default"), 200);
  };

  return (
    <StyledButton type={type} {...props} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
