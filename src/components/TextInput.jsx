import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import IMask from "imask";

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
  border: 1px solid ${({ isFocused, disabled, error }) => 
    disabled ? "#E1E8ED" : 
    error ? "#E71D36" : 
    isFocused ? "#001D29" : "#C4CDD5"};
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
`;

const PrefixInput = styled.div`
  width: 28px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 12px 8px 12px 16px;
  gap: 8px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 0%;
  color: ${({ disabled }) => (disabled ? "#66777E" : "#334A54")};
  background: ${({ disabled }) => (disabled ? "#EFF3F4" : "#FFFFFF")};
  border-right: 1px solid ${({ disabled }) => (disabled ? "#E1E8ED" : "#C4CDD5")};
`;

const InputField = styled.input`
  width: calc(100% - 52px);
  height: 19px;
  padding: 12px 16px;
  border: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 0%;
  color: ${({ disabled, error }) => (disabled ? "#66777E" : error ? "#E71D36" : "#334A54")};
  background: transparent;
  outline: none;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
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

const TextInput = ({ 
  label,
  placeholder, 
  width = "361px", 
  height = "80px",
  showCounter = false, 
  maxLength = 300,
  alwaysShowLabel = false,
  alwaysFocused = false,
  error = false,
  errorMessage = "Error message",
  disabled = false,
  defaultValue = "",
  phoneMask = false,
  phoneFormat = "000-000-000",
  prefix = "+19"
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const inputRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  }, [alwaysFocused]);

  useEffect(() => {
    if (phoneMask && inputRef.current) {
      maskRef.current = IMask(inputRef.current, {
        mask: phoneFormat,
        lazy: false,
      });

      maskRef.current.on("accept", () => {
        setInputValue(maskRef.current.value);
      });

      maskRef.current.value = defaultValue;
      maskRef.current.updateValue();

      return () => {
        maskRef.current.destroy();
      };
    }
  }, [phoneMask, phoneFormat, defaultValue]);

  const handleFocus = () => {
    setIsFocused(true);
    if (phoneMask && maskRef.current) {
      maskRef.current.updateValue();
    }
  };

  const handleBlur = () => {
    if (!alwaysFocused) {
      setIsFocused(false);
    }
    if (phoneMask && maskRef.current) {
      maskRef.current.updateValue();
    }
  };

  const handleInputChange = (e) => {
    if (phoneMask) {
      setInputValue(maskRef.current.value);
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <InputWrapper width={width} height={height}>
      {label && (
        <Label isVisible={isFocused || inputValue.length > 0 || alwaysShowLabel} error={error}>
          {label}
        </Label>
      )}
      <InputContainer isFocused={isFocused} disabled={disabled} error={error}>
        {phoneMask && <PrefixInput disabled={disabled}>{prefix}</PrefixInput>}
        <InputField 
          ref={inputRef}
          placeholder={placeholder} 
          value={disabled ? defaultValue : inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          error={error}
          disabled={disabled}
        />
      </InputContainer>
      {(error || (showCounter && !phoneMask)) && (
        <CounterWrapper>
          {error ? <ErrorMessage>{errorMessage}</ErrorMessage> : <span></span>} 
          {showCounter && !phoneMask && <CounterLabel>{`${inputValue.length} / ${maxLength}`}</CounterLabel>}
        </CounterWrapper>
      )}
    </InputWrapper>
  );
};

export default TextInput;
