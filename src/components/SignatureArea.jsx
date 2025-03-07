import React, { useState } from "react";
import styled from "styled-components";

const SignatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "100%"};
`;

const Label = styled.label`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  color: ${({ error }) => (error ? "#E71D36" : "#334A54")};
  padding-left: 16px;
`;

const SignatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  border: 1px solid ${({ isFocused, error, disabled }) => 
    disabled ? "#E1E8ED" : error ? "#E71D36" : isFocused ? "#001D29" : "#C4CDD5"};
  border-radius: 12px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "172px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
`;

const Placeholder = styled.span`
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 14px;
  color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
`;

const ClearButton = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  background: none;
  border: none;
  font-size: 14px;
  color: #99A4A9;
  cursor: pointer;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  &:hover {
    color: #001D29;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #E71D36;
  padding-left: 16px;
`;

const SignatureArea = ({ 
  label = "Signature Area",
  width = "100%",
  height = "172px",
  error = false,
  errorMessage = "Error message",
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [signature, setSignature] = useState(null);

  const handleClear = () => {
    setSignature(null);
  };

  return (
    <SignatureWrapper width={width}>
      {label && <Label error={error}>{label}</Label>}
      <SignatureContainer 
        width={width} 
        height={height}
        isFocused={isFocused}
        error={error}
        disabled={disabled}
        onClick={() => !disabled && setIsFocused(true)}
      >
        {!signature && <Placeholder error={error}>Sign here</Placeholder>}
        <ClearButton isVisible={!!signature} onClick={handleClear}>Clear</ClearButton>
      </SignatureContainer>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignatureWrapper>
  );
};

export default SignatureArea;
