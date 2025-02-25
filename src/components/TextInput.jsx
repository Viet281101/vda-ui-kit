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
  color: #334A54;
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
  border: 1px solid ${({ isFocused }) => (isFocused ? "#001D29" : "#CCD2D4")};
  border-radius: 12px;
  background: #FFFFFF;
  font-size: 16px;
  color: #001D29;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 1px solid #001D29;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
`;

const CounterLabel = styled.span`
  font-size: 12px;
  color: #66777E;
`;

const TextInput = ({ 
  label,
  placeholder, 
  width = "361px", 
  height = "80px",
  showCounter = false, 
  maxLength = 300,
  alwaysShowLabel = false,
  alwaysFocused = false
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const inputRef = useRef(null);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [alwaysFocused]);

  return (
    <InputWrapper width={width} height={height}>
      {label && (
        <Label isVisible={isFocused || inputValue.length > 0 || alwaysShowLabel}>
          {label}
        </Label>
      )}
      <InputContainer>
        <InputField 
          ref={inputRef}
          placeholder={placeholder} 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !alwaysFocused && setIsFocused(false)}
          maxLength={maxLength}
          isFocused={isFocused}
        />
      </InputContainer>
      {showCounter && (
        <CounterWrapper>
          <CounterLabel>{`${inputValue.length} / ${maxLength}`}</CounterLabel>
        </CounterWrapper>
      )}
    </InputWrapper>
  );
};

export default TextInput;
