import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const DateTimePickerWrapper = styled.div`
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
    border: 1px solid ${({ disabled, error }) =>
      disabled ? "none" : error ? "#E71D36" : "#001D29"};
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

const PopupWrapper = styled.div`
  position: absolute;
  top: calc(100% - 22px);
  left: 0;
  margin-top: 4px;
  width: 410px;
  height: 284px;
  background: #fff;
  border: 1px solid #E5E9EA;
  border-radius: 8px;
  box-shadow: 0px 9px 28px 0px #0019290D;
  display: flex;
  flex-direction: row;
  z-index: 100;
`;

const DatePanel = styled.div`
  width: 240px;
  height: 100%;
  border-radius: 8px 0 0 8px;
`;

const TimePanel = styled.div`
  width: 170px;
  height: 100%;
  border-radius: 0 8px 8px 0;
`;

const DateBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 224px;
  height: 36px;
  padding: 8px;
`;

const MonthYearContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
`;

const MonthText = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #001d29;
`;

const YearText = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #001d29;
`;

const ArrowContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`;

const ArrowButton = styled.button`
  min-width: 16px;
  min-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ArrowUpIcon = ({ color = "#001D29" }) => (
  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.16667 2.06017L1.14483 7.082C1.01239 7.21445 0.854722 7.27895 0.671833 7.2755C0.488944 7.27206 0.331222 7.20411 0.198666 7.07167C0.0662219 6.93923 0 6.78156 0 6.59867C0 6.41578 0.0662219 6.25806 0.198666 6.1255L5.31283 1.02167C5.43339 0.901226 5.56844 0.811948 5.718 0.753837C5.86756 0.695615 6.01711 0.666504 6.16667 0.666504C6.31622 0.666504 6.46578 0.695615 6.61533 0.753837C6.76489 0.811948 6.89994 0.901226 7.0205 1.02167L12.1347 6.13584C12.2671 6.26828 12.3316 6.42423 12.3282 6.60367C12.3247 6.78323 12.2568 6.93923 12.1243 7.07167C11.9919 7.20411 11.8342 7.27034 11.6513 7.27034C11.4684 7.27034 11.3107 7.20411 11.1782 7.07167L6.16667 2.06017Z" fill={color}/>
  </svg>
);

const ArrowDownIcon = ({ color = "#001D29" }) => (
  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.16667 5.88197L1.14483 0.860135C1.01239 0.727691 0.854722 0.66319 0.671833 0.666635C0.488944 0.670079 0.331222 0.738024 0.198666 0.870468C0.0662219 1.00291 0 1.16058 0 1.34347C0 1.52636 0.0662219 1.68408 0.198666 1.81663L5.31283 6.92047C5.43339 7.04091 5.56844 7.13019 5.718 7.1883C5.86756 7.24652 6.01711 7.27563 6.16667 7.27563C6.31622 7.27563 6.46578 7.24652 6.61533 7.1883C6.76489 7.13019 6.89994 7.04091 7.0205 6.92047L12.1347 1.8063C12.2671 1.67386 12.3316 1.51791 12.3282 1.33847C12.3247 1.15891 12.2568 1.00291 12.1243 0.870468C11.9919 0.738024 11.8342 0.671801 11.6513 0.671801C11.4684 0.671801 11.3107 0.738024 11.1782 0.870468L6.16667 5.88197Z" fill={color}/>
  </svg>
);

const ArrowLeftIcon = ({ color = "#001D29" }) => (
  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.06017 6.16163L7.082 11.1835C7.21445 11.3159 7.27895 11.4736 7.2755 11.6565C7.27206 11.8394 7.20411 11.9971 7.07167 12.1296C6.93923 12.2621 6.78156 12.3283 6.59867 12.3283C6.41578 12.3283 6.25806 12.2621 6.1255 12.1296L1.02167 7.01546C0.901226 6.89491 0.811948 6.75985 0.753837 6.6103C0.695615 6.46074 0.666504 6.31119 0.666504 6.16163C0.666504 6.01208 0.695615 5.86252 0.753837 5.71296C0.811948 5.56341 0.901226 5.42835 1.02167 5.3078L6.13584 0.193631C6.26828 0.0611863 6.42423 -0.00331348 6.60367 0.000130963C6.78323 0.00357541 6.93923 0.0715195 7.07167 0.203964C7.20411 0.336408 7.27034 0.494075 7.27034 0.676964C7.27034 0.859853 7.20411 1.01758 7.07167 1.15013L2.06017 6.16163Z" fill={color}/>
  </svg>
);

const ArrowRightIcon = ({ color = "#001D29" }) => (
  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.88197 6.16667L0.860135 1.14483C0.727691 1.01239 0.66319 0.854722 0.666635 0.671833C0.670079 0.488944 0.738024 0.331222 0.870468 0.198666C1.00291 0.0662219 1.16058 0 1.34347 0C1.52636 0 1.68408 0.0662219 1.81663 0.198666L6.92047 5.31283C7.04091 5.43339 7.13019 5.56844 7.1883 5.718C7.24652 5.86756 7.27563 6.01711 7.27563 6.16667C7.27563 6.31622 7.24652 6.46578 7.1883 6.61533C7.13019 6.76489 7.04091 6.89994 6.92047 7.0205L1.8063 12.1347C1.67386 12.2671 1.51791 12.3316 1.33847 12.3282C1.15891 12.3247 1.00291 12.2568 0.870468 12.1243C0.738024 11.9919 0.671801 11.8342 0.671801 11.6513C0.671801 11.4684 0.738024 11.3107 0.870468 11.1782L5.88197 6.16667Z" fill={color}/>
  </svg>
);

const DateGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 224px;
  height: 224px;
  padding: 0 8px 8px 8px;
  margin: auto;
`;

const DayLabel = styled.div`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: center;
  color: #66777E;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const DateCell = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${({ isSelected, isToday }) => isSelected ? "#007EB0" : isToday ? "transparent" : "transparent"};
  color: ${({ isSelected, isToday, isOtherMonth }) => isSelected ? "#FFFFFF" : isToday ? "#007EB0" : isOtherMonth ? "#99A4A9" : "#0A1629"};
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ isSelected }) => (isSelected ? "50%" : "0")};
  cursor: pointer;
  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#007EB0" : "#E1F5FE")};
    border-radius: 50%;
  }
`;

const YearGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 232px;
  height: 224px;
  gap: 8px;
  margin: auto;
`;

const YearCell = styled.button`
  width: 66.67px;
  height: 32px;
  padding: 8px;
  margin: auto;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#0A1629")};
  background: ${({ isSelected }) => (isSelected ? "#007EB0" : "transparent")};
  border: none;
  border-radius: ${({ isSelected }) => (isSelected ? "8px" : "0")};
  cursor: pointer;
  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#007EB0" : "#E1F5FE")};
    border-radius: 8px;
  }
`;

const YearBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 224px;
  height: 36px;
  padding: 8px;
`;

const YearGroupContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
`;

const YearRangeText = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #001d29;
`;

const MonthGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 232px;
  height: 176px;
  gap: 8px;
  margin: auto;
`;

const MonthCell = styled.button`
  width: 66.67px;
  height: 32px;
  padding: 8px;
  margin: auto;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#0A1629")};
  background: ${({ isSelected }) => (isSelected ? "#007EB0" : "transparent")};
  border: none;
  border-radius: ${({ isSelected }) => (isSelected ? "8px" : "0")};
  cursor: pointer;
  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#007EB0" : "#E1F5FE")};
    border-radius: 8px;
  }
`;

const MonthBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 224px;
  height: 36px;
  padding: 8px;
`;

const YearOnlyText = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #001d29;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
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
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  text-align: center;
  padding: 2px;
  gap: 4px;
  position: relative;
`;

const TimeItem = styled.div`
  max-width: 24px;
  max-height: 24px;
  border-radius: 5px;
  padding: 4px;
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#FFF" : "#001D29")};
  background: ${({ isSelected }) => (isSelected ? "#007EB0" : "transparent")};
  font-weight: 400;
  cursor: ${({ isSelected }) => (isSelected ? "default" : "pointer")};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ isSelected }) => (isSelected ? "#FFF" : "#001D29")};
    background: ${({ isSelected }) => (isSelected ? "#007EB0" : "#FAFCFD")};
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

const TimeColumnComponent = ({ items, selectedItem, type, onSelect }) => {
  return (
    <TimeColumn>
      {items.map((item, index) => (<TimeItem key={`${item}-${index}`} isSelected={selectedItem === item} onClick={() => onSelect(item, type)}>{item}</TimeItem>))}
    </TimeColumn>
  );
};

const DateTimePicker = ({
  label,
  placeholder = "Choose date time",
  width = "361px",
  height = "80px",
  alwaysShowLabel = false,
  alwaysFocused = false,
  allowManualInput = false,
  disabled = false,
  showPlaceholderLabel = false,
  error = "",
  format = "mm/dd/yyyy hh:MM AM",
}) => {
  const [date, setDate] = useState("");
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);
  const iconRef = useRef(null);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const [isYearGrid, setIsYearGrid] = useState(false);
  const [isMonthGrid, setIsMonthGrid] = useState(false);
  const [yearRange, setYearRange] = useState([]);
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const periods = ["AM", "PM"];
  const errorMessage = error && typeof error === "string" ? error : "Error Message";

  const generateCalendarDays = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    let days = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDate - i,
        isOtherMonth: true,
        isSelected: false,
        isToday: false,
      });
    }
    for (let i = 1; i <= lastDate; i++) {
      const thisDate = new Date(year, month, i);
      const isToday = thisDate.toDateString() === today.toDateString();
      const isSelected = selectedDate.toDateString() === thisDate.toDateString();
      days.push({
        day: i,
        isOtherMonth: false,
        isSelected,
        isToday,
      });
    }
    while (days.length < 42) {
      const nextDay = days.length - (firstDay === 0 ? 6 : firstDay - 1) - lastDate + 1;
      days.push({
        day: nextDay,
        isOtherMonth: true,
        isSelected: false,
        isToday: false,
      });
    }
    return days;
  };
  const calendarDays = generateCalendarDays(currentMonth, currentYear);

  const updateYearRange = () => {
    const startYear = Math.floor(currentYear / 15) * 15;
    setYearRange(Array.from({ length: 15 }, (_, i) => startYear + i));
  };

  const openPopup = () => {
    if (!disabled) {
      setIsPopupOpen(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const togglePopup = (e) => {
    e.stopPropagation();
    if (disabled) return;
  
    if (isPopupOpen) {
      closePopup();
    } else {
      openPopup();
    }
  };

  const toggleYearGrid = () => {
    if (!isYearGrid) updateYearRange();
    setIsYearGrid(!isYearGrid);
    setIsMonthGrid(false);
  };

  const handleSelectTime = (value, type) => {
    if (type === "hour") setSelectedHour(value);
    if (type === "minute") setSelectedMinute(value);
    if (type === "period") setSelectedPeriod(value);
    const selected = new Date(selectedDate);
    const hour = parseInt(type === "hour" ? value : selectedHour, 10);
    const minute = parseInt(type === "minute" ? value : selectedMinute, 10);
    const period = type === "period" ? value : selectedPeriod;
    const finalHour = period === "PM" ? (hour % 12) + 12 : hour % 12;
    selected.setHours(finalHour);
    selected.setMinutes(minute);
    setDate(
      `${String(selected.getMonth() + 1).padStart(2, "0")}/` +
      `${String(selected.getDate()).padStart(2, "0")}/` +
      `${selected.getFullYear()} ` +
      `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${period}`
    );
  };

  const handleSelectYear = (year) => {
    setCurrentYear(year);
    setIsYearGrid(false);
    setIsMonthGrid(true);
  };
  const handleSelectMonth = (monthIndex) => {
    setCurrentMonth(monthIndex);
    setIsMonthGrid(false);
  };

  const handleNow = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const period = now.getHours() >= 12 ? "PM" : "AM";
    setSelectedHour(String(hours).padStart(2, "0"));
    setSelectedMinute(String(minutes).padStart(2, "0"));
    setSelectedPeriod(period);
    setSelectedDate(now);
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
    setDate(`${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}/${now.getFullYear()} ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`);
  };

  const handleConfirm = () => {
    setDate(
      `${String(selectedDate.getMonth() + 1).padStart(2, "0")}/` +
      `${String(selectedDate.getDate()).padStart(2, "0")}/` +
      `${selectedDate.getFullYear()} ` +
      `${selectedHour}:${selectedMinute} ${selectedPeriod}`
    );
    setIsPopupOpen(false);
  };

  const updateMonthRange = (offset) => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + offset;
      let newYear = currentYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };
  const handlePrevMonth = () => updateMonthRange(-1);
  const handleNextMonth = () => updateMonthRange(1);

  useEffect(() => {
    updateYearRange();
    // eslint-disable-next-line
  }, [currentYear]);

  useEffect(() => {
    if (alwaysFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [alwaysFocused]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !inputRef.current?.contains(e.target) &&
        !popupRef.current?.contains(e.target) &&
        !iconRef.current?.contains(e.target)
      ) { setIsPopupOpen(false); }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePrevYear = () => setCurrentYear(prev => prev - 1);
  const handleNextYear = () => setCurrentYear(prev => prev + 1);
  const handlePrevYearRange = () => setCurrentYear(prev => prev - 15);
  const handleNextYearRange = () => setCurrentYear(prev => prev + 15);

  return (
    <DateTimePickerWrapper width={width} height={height}>
      {label && <Label isVisible={isFocused || alwaysShowLabel} error={error}>{label}</Label>}
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
        <IconWrapper ref={iconRef} disabled={disabled} onClick={togglePopup}>
          <CalendarIcon color={disabled ? "#CCD2D4" : "#334A54"} />
        </IconWrapper>
      </InputContainer>
      {(error || showPlaceholderLabel) && (<PlaceholderLabel error={error}>{error ? errorMessage : format}</PlaceholderLabel>)}
      {isPopupOpen && (
        <PopupWrapper ref={popupRef}>
          <DatePanel>
            {isYearGrid ? (
              <>
                <YearBar>
                  <YearGroupContainer onClick={toggleYearGrid}>
                    <YearRangeText>{`${yearRange[0]} - ${yearRange[14]}`}</YearRangeText>
                    <ArrowDownIcon />
                  </YearGroupContainer>
                  <ArrowContainer>
                    <ArrowButton onClick={handlePrevYearRange}><ArrowLeftIcon /></ArrowButton>
                    <ArrowButton onClick={handleNextYearRange}><ArrowRightIcon /></ArrowButton>
                  </ArrowContainer>
                </YearBar>
                <YearGridWrapper>
                  {yearRange.map((year) => (<YearCell key={year} isSelected={year === currentYear} onClick={() => handleSelectYear(year)}>{year}</YearCell>))}
                </YearGridWrapper>
              </>
            ) : isMonthGrid ? (
              <>
                <MonthBar>
                  <YearGroupContainer onClick={toggleYearGrid}>
                    <YearOnlyText>{currentYear}</YearOnlyText>
                    <ArrowUpIcon />
                  </YearGroupContainer>
                  <ArrowContainer>
                    <ArrowButton onClick={handlePrevYear}><ArrowLeftIcon /></ArrowButton>
                    <ArrowButton onClick={handleNextYear}><ArrowRightIcon /></ArrowButton>
                  </ArrowContainer>
                </MonthBar>
                <MonthGridWrapper>
                  {monthsList.map((month, index) => (
                    <MonthCell key={index} isSelected={index === currentMonth} onClick={() => handleSelectMonth(index)}>{month}</MonthCell>
                  ))}
                </MonthGridWrapper>
              </>
            ) : (
              <>
                <DateBar>
                  <MonthYearContainer onClick={toggleYearGrid}>
                    <MonthText>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}</MonthText>
                    <YearText>{currentYear}</YearText>
                    {isYearGrid ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </MonthYearContainer>
                  <ArrowContainer>
                    <ArrowButton onClick={handlePrevMonth}><ArrowLeftIcon /></ArrowButton>
                    <ArrowButton onClick={handleNextMonth}><ArrowRightIcon /></ArrowButton>
                  </ArrowContainer>
                </DateBar>
                <DateGridWrapper>
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (<DayLabel key={i}>{d}</DayLabel>))}
                  {calendarDays.map(({ day, isOtherMonth, isSelected, isToday }, index) => (
                    <DateCell
                      key={index}
                      isOtherMonth={isOtherMonth}
                      isSelected={isSelected}
                      isToday={isToday}
                      onClick={() => {
                        const selected = new Date(currentYear, currentMonth, day);
                        setSelectedDate(selected);
                        setDate(`${String(selected.getMonth() + 1).padStart(2, "0")}/${String(selected.getDate()).padStart(2, "0")}/${selected.getFullYear()}`);
                      }}
                    >{day}</DateCell>
                  ))}
                </DateGridWrapper>
              </>
            )}
          </DatePanel>

          <TimePanel>
            <ColumnContainer>
              <Divider />
              <TimeColumnComponent items={hours} selectedItem={selectedHour} type="hour" onSelect={handleSelectTime}/>
              <Divider />
              <TimeColumnComponent items={minutes} selectedItem={selectedMinute} type="minute" onSelect={handleSelectTime}/>
              <Divider />
              <TimeColumn>{periods.map((period) => (<TimeItem key={period} isSelected={selectedPeriod === period} onClick={() => handleSelectTime(period, "period")}>{period}</TimeItem>))}</TimeColumn>
            </ColumnContainer>
            <Footer>
              <Button type="outline3" style={{ width: "29px", height: "14px", margin: "auto 0", fontWeight: 400 }} onClick={handleNow}>Now</Button>
              <Button type="primary1" style={{ width: "39px", margin: "auto 0" }} onClick={handleConfirm}>OK</Button>
            </Footer>
          </TimePanel>
        </PopupWrapper>
      )}
    </DateTimePickerWrapper>
  );
};

export default DateTimePicker;
