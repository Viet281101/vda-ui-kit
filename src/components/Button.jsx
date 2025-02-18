import React from "react";
import styled from "styled-components";

const variants = {
  primary: {
    default: { background: "#001D29", color: "white" },
    hover: { background: "#1a343e", color: "white" },
    pressed: { background: "#40565F", color: "white" },
    disabled: { background: "#E5E9EA", color: "#66777E" },
  },
  secondary: {
    default: { background: "transparent", color: "#001D29", border: "1px solid #001D29" },
    hover: { background: "transparent", color: "#1a343e", border: "1px solid #1a343e" },
    pressed: { background: "transparent", color: "#40565F", border: "1px solid #40565F" },
    disabled: { background: "transparent", color: "#66777E", border: "1px solid #E5E9EA" },
  },
  outline: {
    default: { background: "transparent", color: "#E71D36", border: "1px solid #E71D36" },
    hover: { background: "transparent", color: "#EC4A5E", border: "1px solid #EC4A5E" },
    pressed: { background: "transparent", color: "#E02A36B2", border: "1px solid #E02A36B2" },
    disabled: { background: "transparent", color: "#66777E", border: "1px solid #E5E9EA" },
  },
};

// Styled button
const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 12px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  border: none;
  gap: 8px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
  ${({ variant, state }) => variants[variant][state] || variants.primary.default};

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

const Button = ({ children, variant = "primary", className, ...props }) => {
  return (
    <StyledButton variant={variant} state="default" className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
