import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";

const TimePickerWrapper = styled.div`
  position: relative;
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
  transition: border 0.3s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  &:focus {
    border: 1px solid ${({ disabled, error }) => (disabled ? "none" : error ? "1px solid #E71D36" : "1px solid #001D29")};
  }
  &::placeholder {
    color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #E71D36;
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

const ClockIcon = ({ color = "#334A54" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9.6V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V9.975C9 10.1083 9.025 10.2375 9.075 10.3625C9.125 10.4875 9.2 10.6 9.3 10.7L12.6 14C12.7833 14.1833 13.0167 14.275 13.3 14.275C13.5833 14.275 13.8167 14.1833 14 14C14.1833 13.8167 14.275 13.5833 14.275 13.3C14.275 13.0167 14.1833 12.7833 14 12.6L11 9.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18Z" fill={color}/>
  </svg>
);

const PopupWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  width: 170px;
  height: 278px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #EFF3F4;
  box-shadow: 0px 9px 28px rgba(0, 29, 41, 0.05);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  z-index: 100;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 222px;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  text-align: center;
  padding: 2px;
`;

const TimeItem = styled.div`
  width: 80%;
  padding: 6px;
  margin 0 auto;
  font-size: 14px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#001D29" : "#334A54")};
  font-weight: ${({ isSelected }) => (isSelected ? "600" : "400")};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #001D29;
  }
`;

const Divider = styled.div`
  width: 1px;
  background: #E5E9EA;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  height: 48px;
`;

const TimePickerPopup = ({ isOpen, selectedHour, selectedMinute, selectedPeriod, onSelect, onClose }) => {
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const periods = ["AM", "PM"];

  return (
    <PopupWrapper isOpen={isOpen}>
      <ColumnContainer>
        <TimeColumn>
          {hours.map((hour) => (
            <TimeItem key={hour} isSelected={selectedHour === hour} onClick={() => onSelect(hour, "hour")}>
              {hour}
            </TimeItem>
          ))}
        </TimeColumn>
        <Divider />
        <TimeColumn>
          {minutes.map((minute) => (
            <TimeItem key={minute} isSelected={selectedMinute === minute} onClick={() => onSelect(minute, "minute")}>
              {minute}
            </TimeItem>
          ))}
        </TimeColumn>
        <Divider />
        <TimeColumn>
          {periods.map((period) => (
            <TimeItem key={period} isSelected={selectedPeriod === period} onClick={() => onSelect(period, "period")}>
              {period}
            </TimeItem>
          ))}
        </TimeColumn>
      </ColumnContainer>
      <Footer>
        <Button type="outline3" style={{ width: "29px", height: "14px", margin: "auto 0", fontWeight: 400 }} onClick={() => onSelect("now")}>Now</Button>
        <Button type="primary1" style={{ width: "39px", margin: "auto 0" }} onClick={onClose} disabled>OK</Button>
      </Footer>
    </PopupWrapper>
  );
};

const TimePicker = ({
  label,
  placeholder = "Choose Time",
  width = "361px",
  height = "80px",
  alwaysShowLabel = false,
  alwaysFocused = false,
  allowManualInput = false,
  disabled = false,
  error = false,
}) => {
  const [time, setTime] = useState("");
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  const togglePopup = () => {
    if (!disabled) {
      setIsPopupOpen((prev) => !prev);
    }
  };

  const handleSelectTime = (value, type) => {
    if (value === "now") {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes();
      const period = now.getHours() >= 12 ? "PM" : "AM";

      setSelectedHour(String(hours).padStart(2, "0"));
      setSelectedMinute(String(minutes).padStart(2, "0"));
      setSelectedPeriod(period);
    } else {
      if (type === "hour") setSelectedHour(value);
      if (type === "minute") setSelectedMinute(value);
      if (type === "period") setSelectedPeriod(value);
    }
  };

  const handleConfirmTime = () => {
    setTime(`${selectedHour}:${selectedMinute} ${selectedPeriod}`);
    setIsPopupOpen(false);
  };

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [alwaysFocused]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && inputRef.current !== event.target) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TimePickerWrapper width={width} height={height}>
      {label && <Label isVisible={isFocused || alwaysShowLabel} error={error}>{label}</Label>}
      <InputContainer>
        <InputField
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={time}
          onChange={(e) => allowManualInput && setTime(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !alwaysFocused && setIsFocused(false)}
          disabled={disabled}
          error={error}
          isFocused={isFocused}
          readOnly={!allowManualInput}
        />
        <IconWrapper disabled={disabled} color={disabled ? "#CCD2D4" : "#334A54"} onClick={togglePopup}>
          <ClockIcon color={disabled ? "#CCD2D4" : "#334A54"} />
        </IconWrapper>
      </InputContainer>
      <TimePickerPopup
        isOpen={isPopupOpen}
        selectedHour={selectedHour}
        selectedMinute={selectedMinute}
        selectedPeriod={selectedPeriod}
        onSelect={handleSelectTime}
        onClose={handleConfirmTime}
      />
      {error && <ErrorMessage>Error message</ErrorMessage>}
    </TimePickerWrapper>
  );
};

export default TimePicker;
