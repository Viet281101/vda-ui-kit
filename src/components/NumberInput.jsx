import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "361px"};
  height: ${({ height }) => height};

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Label = styled.label`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0%;
  color: ${({ error }) => (error ? "#E71D36" : "#334A54")};
  padding-left: 16px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(10px)")};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputField = styled.input`
  width: 329px;
  height: 19px;
  padding: 12px 16px;
  border: 1px solid ${({ isFocused, disabled, error }) => (disabled ? "#E1E8ED" : error ? "#E71D36" : isFocused ? "#001D29" : "#C4CDD5")};
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  font-size: 16px;
  color: ${({ disabled, error }) => (disabled ? "#66777E" : error ? "#E71D36" : "#334A54")};
  outline: none;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:focus {
    border: ${({ disabled, error }) => (disabled ? "none" : error ? "1px solid #E71D36" : "1px solid #001D29")};
  }

  &::placeholder {
    color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #E71D36;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const ArrowContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-left: 1px solid #CCD2D4;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 22.5px;
  &:hover {
    opacity: 0.7;
  }
`;

const ArrowUp = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.625 1.54525L0.858625 5.31163C0.759292 5.41096 0.641042 5.45933 0.503875 5.45675C0.366708 5.45417 0.248416 5.40321 0.149 5.30387C0.0496665 5.20454 0 5.08629 0 4.94912C0 4.81196 0.0496665 4.69367 0.149 4.59425L3.98463 0.766375C4.07504 0.676042 4.17633 0.609083 4.2885 0.5655C4.40067 0.521833 4.51283 0.5 4.625 0.5C4.73717 0.5 4.84933 0.521833 4.9615 0.5655C5.07367 0.609083 5.17496 0.676042 5.26538 0.766375L9.101 4.602C9.20033 4.70133 9.24871 4.81829 9.24613 4.95288C9.24354 5.08754 9.19258 5.20454 9.09325 5.30387C8.99392 5.40321 8.87567 5.45288 8.7385 5.45288C8.60133 5.45288 8.48304 5.40321 8.38363 5.30387L4.625 1.54525Z" fill="#001D29"/>
  </svg>
);

const ArrowDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.625 4.4116L0.858625 0.645223C0.759292 0.54589 0.641042 0.497515 0.503875 0.500098C0.366708 0.502682 0.248416 0.55364 0.149 0.652973C0.0496665 0.752307 0 0.870557 0 1.00772C0 1.14489 0.0496665 1.26318 0.149 1.3626L3.98463 5.19047C4.07504 5.28081 4.17633 5.34776 4.2885 5.39135C4.40067 5.43502 4.51283 5.45685 4.625 5.45685C4.73717 5.45685 4.84933 5.43502 4.9615 5.39135C5.07367 5.34776 5.17496 5.28081 5.26538 5.19047L9.101 1.35485C9.20033 1.25552 9.24871 1.13856 9.24613 1.00397C9.24354 0.869307 9.19258 0.752307 9.09325 0.652973C8.99392 0.55364 8.87567 0.503973 8.7385 0.503973C8.60133 0.503973 8.48304 0.55364 8.38363 0.652973L4.625 4.4116Z" fill="#001D29"/>
  </svg>
);

const NumberInput = ({ 
  label,
  placeholder, 
  width = "361px", 
  height = "80px",
  alwaysShowLabel = false,
  alwaysFocused = false,
  showArrow = false,
  error = false,
  errorMessage = "Error message",
  disabled = false,
  defaultValue = "",
  customStep = 1,
  minLimit = 0,
  maxLimit = 100,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const inputRef = useRef(null);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  }, [alwaysFocused]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= minLimit && Number(value) <= maxLimit)) {
      setInputValue(value);
    }
  };

  const handleArrowClick = (step) => {
    setInputValue((prev) => {
      const newValue = Number(prev) + step;
      if (newValue >= minLimit && newValue <= maxLimit) {
        return newValue.toString();
      }
      return prev;
    });
  };

  return (
    <InputWrapper width={width} height={height}>
      {label && (
        <Label isVisible={isFocused || inputValue.length > 0 || alwaysShowLabel} error={error}>
          {label}
        </Label>
      )}
      <InputContainer>
        <InputField 
          type="number"
          ref={inputRef}
          placeholder={placeholder}
          value={disabled ? defaultValue : inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !alwaysFocused && setIsFocused(false)}
          isFocused={isFocused}
          error={error}
          disabled={disabled}
        />
        <ArrowContainer isVisible={isFocused || showArrow}>
          <ArrowButton
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleArrowClick(customStep)}
            disabled={!isFocused}
            style={{ borderBottom: "1px solid #CCD2D4" }}>
            <ArrowUp />
          </ArrowButton>
          <ArrowButton
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleArrowClick(-customStep)}
            disabled={!isFocused}>
            <ArrowDown />
          </ArrowButton>
        </ArrowContainer>
      </InputContainer>
      {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : <span></span>} 
    </InputWrapper>
  );
};

export default NumberInput;
