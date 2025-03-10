import React, { useState, useEffect, useRef, useCallback } from "react";
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
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(10px)")};
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
  height: ${({ height }) => height || "110px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  gap: 10px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
`;

const Placeholder = styled.span`
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 14px;
  color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(10px)")};
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
  label = "Sign here",
  placeholder = "Signature Area",
  width = "329px",
  height = "110px",
  alwaysFocused = false,
  error = false,
  errorMessage = "Error message",
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const [signature, setSignature] = useState(null);
  const containerRef = useRef(null);

  const handleClear = () => {
    setSignature(null);
  };

  useEffect(() => {
    if (alwaysFocused) {
      setIsFocused(true);
    }
  }, [alwaysFocused]);

  const handleClickOutside = useCallback((event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      if (!alwaysFocused) {
        setIsFocused(false);
      }
    }
  }, [alwaysFocused]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <SignatureWrapper width={width}>
      {label && (
        <Label isVisible={isFocused || signature} error={error}>
          {label}
        </Label>
      )}
      <SignatureContainer 
        ref={containerRef}
        width={width} 
        height={height}
        isFocused={isFocused}
        error={error}
        disabled={disabled}
        onClick={() => !disabled && setIsFocused(true)}
      >
        {!signature && (
          <Placeholder error={error} isVisible={!isFocused}>
            {placeholder}
          </Placeholder>
        )}
        <ClearButton isVisible={!!signature} onClick={handleClear}>Clear</ClearButton>
      </SignatureContainer>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignatureWrapper>
  );
};

export default SignatureArea;
