import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "361px"};
  height: ${({ height }) => height};
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

const TextAreaField = styled.textarea`
  width: 100%;
  min-height: ${({ height }) => height || "120px"};
  padding: 12px 16px;
  border: 1px solid ${({ isFocused, disabled, error }) => 
    disabled ? "#E1E8ED" : error ? "#E71D36" : isFocused ? "#001D29" : "#C4CDD5"};
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  font-size: 16px;
  color: ${({ disabled, error }) => disabled ? "#66777E" : error ? "#E71D36" : "#334A54"};
  outline: none;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  resize: none;
  overflow-y: auto;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  &:focus {
    border: ${({ disabled, error }) => (disabled ? "none" : error ? "1px solid #E71D36" : "1px solid #001D29")};
  }
  &::placeholder {
    color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const CounterLabel = styled.span`
  font-size: 12px;
  color: #66777E;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #E71D36;
`;

const TextArea = ({ 
  label,
  placeholder, 
  width = "361px", 
  height = "120px",
  autoExpand = false,
  showCounter = false, 
  maxLength = 300,
  alwaysShowLabel = false,
  alwaysFocused = false,
  error = false,
  errorMessage = "Error message",
  disabled = false,
  defaultValue = ""
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (alwaysFocused && textAreaRef.current) {
      textAreaRef.current.focus();
      setIsFocused(true);
    }
  }, [alwaysFocused]);

  useEffect(() => {
    if (autoExpand && textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [inputValue, autoExpand]);

  return (
    <InputWrapper width={width} height={height}>
      {label && (
        <Label isVisible={isFocused || inputValue.length > 0 || alwaysShowLabel} error={error}>
          {label}
        </Label>
      )}
      <InputContainer>
        <TextAreaField 
          ref={textAreaRef}
          placeholder={placeholder} 
          value={disabled ? defaultValue : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !alwaysFocused && setIsFocused(false)}
          maxLength={maxLength}
          isFocused={isFocused}
          error={error}
          disabled={disabled}
          height={height}
        />
      </InputContainer>
      {(error || showCounter) && (
        <CounterWrapper>
          {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : <span></span>} 
          {showCounter && <CounterLabel>{`${inputValue.length} / ${maxLength}`}</CounterLabel>}
        </CounterWrapper>
      )}
    </InputWrapper>
  );
};

export default TextArea;
