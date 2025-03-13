import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ multiDate }) => (multiDate ? "row" : "column")};
  gap: ${({ multiDate }) => (multiDate ? "16px" : "4px")};
  width: ${({ width }) => width || "361px"};
  height: ${({ multiDate, height }) => (multiDate ? "auto" : height)};
`;

const Label = styled.label`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
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
  width: 100%;
  height: calc(100% - 35px);
`;

const InputField = styled.input`
  width: calc(100% - 32px);
  height: calc(100% - 25px);
  padding: 12px 16px;
  padding-right: 40px;
  border: 1px solid ${({ isFocused, disabled, error }) => (disabled ? "#E1E8ED" : error ? "#E71D36" : isFocused ? "#001D29" : "#C4CDD5")};
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  font-size: 16px;
  color: ${({ disabled, error }) => (disabled ? "#66777E" : error ? "#E71D36" : "#334A54")};
  outline: none;
  transition: border 0.3s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  &:focus {
    border: 1px solid ${({ disabled, error }) => (disabled ? "none" : error ? "#E71D36" : "#001D29")};
  }
  &::placeholder {
    color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
  }
`;

const PlaceholderLabel = styled.span`
  font-size: 12px;
  color: ${({ error }) => (error ? "#E71D36" : "#66777E")};
  padding-left: 16px;
`;

const IconWrapper = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  user-select: none;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ disabled }) => (disabled ? "#CCD2D4" : "#334A54")};
  }
`;

const CalendarIcon = ({ color = "#334A54" }) => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18L0 4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z" fill={color}/>
  </svg>
);

const DatePicker = ({
  label,
  placeholder = "Choose date",
  width = "361px",
  height = "80px",
  alwaysShowLabel = false,
  alwaysFocused = false,
  allowManualInput = false,
  disabled = false,
  error = false,
  showPlaceholderLabel = false,
  multiDate = false,
}) => {
  const [date, setDate] = useState("");
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const inputRef = useRef(null);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [alwaysFocused]);

  return (
    < DatePickerWrapper width={width} height={height} multiDate={multiDate}>
      {label && <Label isVisible={isFocused || alwaysShowLabel} error={error}>{label}</Label>}

      {multiDate ? (
        <>
          <InputContainer>
            <InputField
              ref={inputRef}
              type="text"
              placeholder="Start Date"
              value={date.start || ""}
              onChange={(e) => allowManualInput && setDate({ ...date, start: e.target.value })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => !alwaysFocused && setIsFocused(false)}
              disabled={disabled}
              error={error}
              isFocused={isFocused}
              readOnly={!allowManualInput}
            />
            <IconWrapper disabled={disabled}>
              <CalendarIcon />
            </IconWrapper>
          </InputContainer>

          <InputContainer>
            <InputField
              type="text"
              placeholder="End Date"
              value={date.end || ""}
              onChange={(e) => allowManualInput && setDate({ ...date, end: e.target.value })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => !alwaysFocused && setIsFocused(false)}
              disabled={disabled}
              error={error}
              isFocused={isFocused}
              readOnly={!allowManualInput}
            />
            <IconWrapper disabled={disabled}>
              <CalendarIcon />
            </IconWrapper>
          </InputContainer>
        </>
      ) : (
        <InputContainer>
          <InputField
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={date}
            onChange={(e) => allowManualInput && setDate(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => !alwaysFocused && setIsFocused(false)}
            disabled={disabled}
            error={error}
            isFocused={isFocused}
            readOnly={!allowManualInput}
          />
          <IconWrapper disabled={disabled}>
            <CalendarIcon />
          </IconWrapper>
        </InputContainer>
      )}

      {showPlaceholderLabel && <PlaceholderLabel error={error}>{error ? "Error message" : "mm/dd/yyyy"}
    </PlaceholderLabel>}
    </DatePickerWrapper>
  );
};

export default DatePicker;
