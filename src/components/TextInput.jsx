import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "361px"};
`;

const Label = styled.label`
  font-size: 12px;
  color: #001D29;
  font-weight: 400;
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
  border: 1px solid #CCD2D4;
  border-radius: 12px;
  background: #FFFFFF;
  font-size: 16px;
  color: #001D29;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 1px solid #007EB0;
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
  maxLength = 300 
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputWrapper width={width}>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <InputField 
          placeholder={placeholder} 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={maxLength}
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
