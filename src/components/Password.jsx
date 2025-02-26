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

const InputField = styled.input`
  width: 329px;
  height: 19px;
  padding: 12px 16px;
  padding-right: 40px;
  border: 1px solid ${({ isFocused, disabled, error }) => (disabled ? "#E1E8ED" : error ? "#E71D36" : isFocused ? "#001D29" : "#C4CDD5")};
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  font-size: 16px;
  color: ${({ disabled, error }) => (disabled ? "#66777E" : error ? "#E71D36" : "#334A54")};
  outline: none;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
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

const ToggleButton = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  user-select: none;
  svg {
    width: 22px;
    height: 22px;
    fill: #334A54;
  }
`;

const InvisibleIcon = () => (
  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.725 12C11.975 12 13.0375 11.5625 13.9125 10.6875C14.7875 9.8125 15.225 8.75 15.225 7.5C15.225 6.25 14.7875 5.1875 13.9125 4.3125C13.0375 3.4375 11.975 3 10.725 3C9.475 3 8.4125 3.4375 7.5375 4.3125C6.6625 5.1875 6.225 6.25 6.225 7.5C6.225 8.75 6.6625 9.8125 7.5375 10.6875C8.4125 11.5625 9.475 12 10.725 12ZM10.725 10.2C9.975 10.2 9.3375 9.9375 8.8125 9.4125C8.2875 8.8875 8.025 8.25 8.025 7.5C8.025 6.75 8.2875 6.1125 8.8125 5.5875C9.3375 5.0625 9.975 4.8 10.725 4.8C11.475 4.8 12.1125 5.0625 12.6375 5.5875C13.1625 6.1125 13.425 6.75 13.425 7.5C13.425 8.25 13.1625 8.8875 12.6375 9.4125C12.1125 9.9375 11.475 10.2 10.725 10.2ZM10.725 15C8.49167 15 6.45417 14.4 4.6125 13.2C2.77083 12 1.31667 10.4167 0.25 8.45C0.166667 8.3 0.104167 8.14583 0.0625 7.9875C0.0208333 7.82917 0 7.66667 0 7.5C0 7.33333 0.0208333 7.17083 0.0625 7.0125C0.104167 6.85417 0.166667 6.7 0.25 6.55C1.31667 4.58333 2.77083 3 4.6125 1.8C6.45417 0.6 8.49167 0 10.725 0C12.9583 0 14.9958 0.6 16.8375 1.8C18.6792 3 20.1333 4.58333 21.2 6.55C21.2833 6.7 21.3458 6.85417 21.3875 7.0125C21.4292 7.17083 21.45 7.33333 21.45 7.5C21.45 7.66667 21.4292 7.82917 21.3875 7.9875C21.3458 8.14583 21.2833 8.3 21.2 8.45C20.1333 10.4167 18.6792 12 16.8375 13.2C14.9958 14.4 12.9583 15 10.725 15ZM10.725 13C12.6083 13 14.3375 12.5042 15.9125 11.5125C17.4875 10.5208 18.6917 9.18333 19.525 7.5C18.6917 5.81667 17.4875 4.47917 15.9125 3.4875C14.3375 2.49583 12.6083 2 10.725 2C8.84167 2 7.1125 2.49583 5.5375 3.4875C3.9625 4.47917 2.75833 5.81667 1.925 7.5C2.75833 9.18333 3.9625 10.5208 5.5375 11.5125C7.1125 12.5042 8.84167 13 10.725 13Z" fill="#334A54"/>
  </svg>
);

const VisibleIcon = () => (
  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.925 5.1C14.4083 5.58333 14.7625 6.13333 14.9875 6.75C15.2125 7.36667 15.2917 8 15.225 8.65C15.225 8.9 15.1333 9.1125 14.95 9.2875C14.7667 9.4625 14.55 9.55 14.3 9.55C14.05 9.55 13.8375 9.4625 13.6625 9.2875C13.4875 9.1125 13.4 8.9 13.4 8.65C13.4833 8.21667 13.4583 7.8 13.325 7.4C13.1917 7 12.9833 6.65833 12.7 6.375C12.4167 6.09167 12.075 5.875 11.675 5.725C11.275 5.575 10.85 5.54167 10.4 5.625C10.15 5.625 9.9375 5.53333 9.7625 5.35C9.5875 5.16667 9.5 4.95 9.5 4.7C9.5 4.45 9.5875 4.2375 9.7625 4.0625C9.9375 3.8875 10.15 3.8 10.4 3.8C11.0333 3.73333 11.6583 3.8125 12.275 4.0375C12.8917 4.2625 13.4417 4.61667 13.925 5.1ZM10.75 2.775C10.4333 2.775 10.125 2.7875 9.825 2.8125C9.525 2.8375 9.225 2.88333 8.925 2.95C8.64167 3 8.3875 2.95833 8.1625 2.825C7.9375 2.69167 7.78333 2.49167 7.7 2.225C7.61667 1.95833 7.64583 1.7 7.7875 1.45C7.92917 1.2 8.13333 1.05 8.4 1C8.78333 0.916667 9.17083 0.858333 9.5625 0.825C9.95417 0.791667 10.35 0.775 10.75 0.775C13.0333 0.775 15.1208 1.375 17.0125 2.575C18.9042 3.775 20.35 5.39167 21.35 7.425C21.4167 7.55833 21.4667 7.69583 21.5 7.8375C21.5333 7.97917 21.55 8.125 21.55 8.275C21.55 8.425 21.5375 8.57083 21.5125 8.7125C21.4875 8.85417 21.4417 8.99167 21.375 9.125C21.075 9.79167 20.7042 10.4167 20.2625 11C19.8208 11.5833 19.3333 12.1167 18.8 12.6C18.6 12.7833 18.3667 12.8583 18.1 12.825C17.8333 12.7917 17.6167 12.6583 17.45 12.425C17.2833 12.1917 17.2125 11.9375 17.2375 11.6625C17.2625 11.3875 17.375 11.1583 17.575 10.975C17.975 10.5917 18.3417 10.175 18.675 9.725C19.0083 9.275 19.3 8.79167 19.55 8.275C18.7167 6.59167 17.5125 5.25417 15.9375 4.2625C14.3625 3.27083 12.6333 2.775 10.75 2.775ZM10.75 15.775C8.51667 15.775 6.475 15.1708 4.625 13.9625C2.775 12.7542 1.31667 11.1667 0.25 9.2C0.166667 9.06667 0.104167 8.92083 0.0625 8.7625C0.0208333 8.60417 0 8.44167 0 8.275C0 8.10833 0.0166667 7.95 0.05 7.8C0.0833333 7.65 0.141667 7.5 0.225 7.35C0.558333 6.68333 0.945833 6.04583 1.3875 5.4375C1.82917 4.82917 2.33333 4.275 2.9 3.775L0.825 1.675C0.641667 1.475 0.554167 1.2375 0.5625 0.9625C0.570833 0.6875 0.666667 0.458333 0.85 0.275C1.03333 0.0916667 1.26667 0 1.55 0C1.83333 0 2.06667 0.0916667 2.25 0.275L19.25 17.275C19.4333 17.4583 19.5292 17.6875 19.5375 17.9625C19.5458 18.2375 19.45 18.475 19.25 18.675C19.0667 18.8583 18.8333 18.95 18.55 18.95C18.2667 18.95 18.0333 18.8583 17.85 18.675L14.35 15.225C13.7667 15.4083 13.175 15.5458 12.575 15.6375C11.975 15.7292 11.3667 15.775 10.75 15.775ZM4.3 5.175C3.81667 5.60833 3.375 6.08333 2.975 6.6C2.575 7.11667 2.23333 7.675 1.95 8.275C2.78333 9.95833 3.9875 11.2958 5.5625 12.2875C7.1375 13.2792 8.86667 13.775 10.75 13.775C11.0833 13.775 11.4083 13.7542 11.725 13.7125C12.0417 13.6708 12.3667 13.625 12.7 13.575L11.8 12.625C11.6167 12.675 11.4417 12.7125 11.275 12.7375C11.1083 12.7625 10.9333 12.775 10.75 12.775C9.5 12.775 8.4375 12.3375 7.5625 11.4625C6.6875 10.5875 6.25 9.525 6.25 8.275C6.25 8.09167 6.2625 7.91667 6.2875 7.75C6.3125 7.58333 6.35 7.40833 6.4 7.225L4.3 5.175Z" fill="#334A54"/>
  </svg>
);

const PasswordInput = ({ 
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
  defaultVisible = false
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const inputRef = useRef(null);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  }, [alwaysFocused]);

  return (
    <InputWrapper width={width} height={height}>
      {label && (
        <Label isVisible={isFocused || inputValue.length > 0 || alwaysShowLabel} error={error}>
          {label}
        </Label>
      )}
      <InputContainer>
        <InputField 
          ref={inputRef}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder} 
          value={disabled ? defaultValue : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !alwaysFocused && setIsFocused(false)}
          maxLength={maxLength}
          isFocused={isFocused}
          error={error}
          disabled={disabled}
        />
        <ToggleButton onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <InvisibleIcon /> : <VisibleIcon />}
        </ToggleButton>
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

export default PasswordInput;
