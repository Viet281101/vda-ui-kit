import React from "react";
import styled from "styled-components";

const variants = {
  primary1: {
    default: { background: "#001D29", color: "white" },
    hover: { background: "#1a343e", color: "white" },
    pressed: { background: "#40565F", color: "white" },
    disabled: { background: "#E5E9EA", color: "#66777E" },
  },
  secondary1: {
    default: { background: "transparent", color: "#007EB0", border: "1px solid #007EB0" },
    hover: { background: "transparent", color: "#409EC4", border: "1px solid #409EC4" },
    pressed: { background: "transparent", color: "#66B2D0", border: "1px solid #66B2D0" },
    disabled: { background: "transparent", color: "#66777E", border: "1px solid #E5E9EA" },
  },
  outline1: {
    default: { background: "transparent", color: "#001D29" },
    hover: { background: "#F7FBFC", color: "#66777E" },
    pressed: { background: "#E5E9EA", color: "#66777E" },
    disabled: { background: "transparent", color: "#66777E" },
  },
  outline2: {
    default: { background: "transparent", color: "#001D29", border: "1px solid #001D29" },
    hover: { background: "transparent", color: "#334A54", border: "1px solid #334A54" },
    pressed: { background: "transparent", color: "#66777E", border: "1px solid #66777E" },
    disabled: { background: "transparent", color: "#66777E", border: "1px solid #E5E9EA" },
  },
  outline3: {
    default: { background: "transparent", color: "#001D29", width: "40px", height: "14px", padding: "0", borderRadius: "4px" },
    hover: { background: "#F7FBFC", color: "#66777E", width: "40px", height: "14px", padding: "0", borderRadius: "4px" },
    pressed: { background: "#E5E9EA", color: "#66777E", width: "40px", height: "14px", padding: "0", borderRadius: "4px" },
    disabled: { background: "transparent", color: "#66777E", width: "40px", height: "14px", padding: "0", borderRadius: "4px" },
  },
  outline4: {
    default: { background: "#007EB0", color: "#FFF" },
    hover: { background: "#1a8bb8", color: "#FFF" },
    pressed: { background: "#409ec4", color: "#FFF" },
    disabled: { background: "#E5E9EA", color: "#66777E" },
  },
};

const StyledButtonSecondary = styled.button`
  width: 60px;
  height: 32px;
  border-radius: 12px;
  border: none;
  padding-top: 4px;
  padding-right: 12px;
  padding-bottom: 4px;
  padding-left: 12px;
  gap: 8px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
  ${({ variant, state }) => variants[variant][state] || variants.primary1.default};

  &:hover {
    ${({ variant }) => variants[variant].hover};
  }

  &:active {
    ${({ variant }) => variants[variant].pressed};
  }

  &:disabled {
    ${({ variant }) => variants[variant].disabled};
    cursor: not-allowed;
  }

  &.hover {
    ${({ variant }) => variants[variant].hover};
  }

  &.pressed {
    ${({ variant }) => variants[variant].pressed};
  }
`;

const ButtonSecondary = ({ children, variant = "primary1", className, ...props }) => {
  return (
    <StyledButtonSecondary variant={variant} state="default" className={className} {...props}>
      {children}
    </StyledButtonSecondary>
  );
};

export default ButtonSecondary;
