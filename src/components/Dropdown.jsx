import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Chip from "./Chips";

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "361px"};
  height: ${({ height }) => height};
  position: relative;
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

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const SelectedValue = styled.div`
  width: 329px;
  min-height: 19px;
  padding: 12px 16px;
  padding-right: 40px;
  gap: 4px;
  border: 1px solid ${({ isFocused, disabled, error }) => 
    disabled ? "#E1E8ED" : 
    error ? "#E71D36" : 
    isFocused ? "#001D29" : "#C4CDD5"};
  border-radius: 12px;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  font-size: 16px;
  color: ${({ disabled, error }) => (disabled ? "#66777E" : error ? "#E71D36" : "#334A54")};
  outline: none;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  user-select: none;
`;

const ArrowIcon = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    width: 19px;
    height: 10px;
    fill: ${({ disabled }) => (disabled ? "#CCD2D4" : "#334A54")};
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #E71D36;
  padding-left: 16px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #C4CDD5;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: ${({ error }) => (error ? "-18px" : "0")};
  padding: 8px 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 12px 16px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  color: ${({ selected }) => (selected ? "#001D29" : "#334A54")};
  background: ${({ selected }) => (selected ? "#F0F4F8" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #EFF3F4;
  &:hover {
    background: #F7FBFC;
  }
`;

const CheckIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.54972 9.15L14.0247 0.675C14.2247 0.475 14.4581 0.375 14.7247 0.375C14.9914 0.375 15.2247 0.475 15.4247 0.675C15.6247 0.875 15.7247 1.1125 15.7247 1.3875C15.7247 1.6625 15.6247 1.9 15.4247 2.1L6.24972 11.3C6.04972 11.5 5.81639 11.6 5.54972 11.6C5.28305 11.6 5.04972 11.5 4.84972 11.3L0.549719 7C0.349719 6.8 0.253885 6.5625 0.262219 6.2875C0.270552 6.0125 0.374719 5.775 0.574719 5.575C0.774719 5.375 1.01222 5.275 1.28722 5.275C1.56222 5.275 1.79972 5.375 1.99972 5.575L5.54972 9.15Z" fill="#001D29"/>
  </svg>
);

const ArrowDown = ({ color = "#334A54" }) => (
  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.25 7.8232L1.71725 0.290447C1.51858 0.0917802 1.28208 -0.00497022 1.00775 0.000196442C0.733417 0.00536311 0.496833 0.10728 0.298 0.305947C0.0993329 0.504613 0 0.741114 0 1.01545C0 1.28978 0.0993329 1.52636 0.298 1.7252L7.96925 9.38095C8.15008 9.56161 8.35267 9.69553 8.577 9.7827C8.80133 9.87003 9.02567 9.9137 9.25 9.9137C9.47433 9.9137 9.69867 9.87003 9.923 9.7827C10.1473 9.69553 10.3499 9.56161 10.5308 9.38095L18.202 1.7097C18.4007 1.51103 18.4974 1.27711 18.4923 1.00795C18.4871 0.738613 18.3852 0.504613 18.1865 0.305947C17.9878 0.10728 17.7513 0.00794638 17.477 0.00794638C17.2027 0.00794638 16.9661 0.10728 16.7673 0.305947L9.25 7.8232Z" fill={color}/>
  </svg>
);

const ArrowUp = ({ color = "#334A54" }) => (
  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.25 2.0905L1.71725 9.62325C1.51858 9.82192 1.28208 9.91867 1.00775 9.9135C0.733417 9.90833 0.496833 9.80642 0.298 9.60775C0.0993329 9.40908 0 9.17258 0 8.89825C0 8.62392 0.0993329 8.38733 0.298 8.1885L7.96925 0.53275C8.15008 0.352083 8.35267 0.218166 8.577 0.131C8.80133 0.0436664 9.02567 0 9.25 0C9.47433 0 9.69867 0.0436664 9.923 0.131C10.1473 0.218166 10.3499 0.352083 10.5308 0.53275L18.202 8.204C18.4007 8.40267 18.4974 8.63658 18.4923 8.90575C18.4871 9.17508 18.3852 9.40908 18.1865 9.60775C17.9878 9.80642 17.7513 9.90575 17.477 9.90575C17.2027 9.90575 16.9661 9.80642 16.7673 9.60775L9.25 2.0905Z" fill={color}/>
  </svg>
);

const Dropdown = ({ label, placeholder = "Select an option", options = [], width, height, error, disabled, value, onSelect, chips = false }) => {
  const [selectedValues, setSelectedValues] = useState(() => {
    if (chips) return Array.isArray(value) ? value : [];
    return value || null;
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(chips ? (Array.isArray(value) ? value : []) : value);
    }
  }, [value, chips]);

  const handleSelect = (selectedValue) => {
    if (disabled) return;
    setSelectedValues((prevValues) => {
      if (chips) {
        return prevValues.includes(selectedValue)
          ? prevValues.filter((val) => val !== selectedValue)
          : [...prevValues, selectedValue];
      } else {
        return selectedValue;
      }
    });
    if (!chips) setIsOpen(false);
  };

  const handleDeleteChip = (chipValue) => {
    setSelectedValues((prevValues) => prevValues.filter((val) => val !== chipValue));
  };

  return (
    <DropdownWrapper width={width} height={height} ref={dropdownRef}>
      {label && <Label isVisible={true} error={error}>{label}</Label>}
      <DropdownContainer disabled={disabled} onClick={() => !disabled && setIsOpen(!isOpen)}>
        <SelectedValue isFocused={isOpen} disabled={disabled} error={error}>
          {chips ? (
            selectedValues.length > 0 ? (
              selectedValues.map((val) => (
                <Chip key={val} label={options.find(opt => opt.value === val)?.label || val} type="Outlined" showLeftIcon={false} autoResize={true} state={disabled ? "disabled" : "default"} onDelete={disabled ? null : () => handleDeleteChip(val)} />
              ))
            ) : placeholder
          ) : (
            selectedValues ? options.find(opt => opt.value === selectedValues)?.label : placeholder
          )}
        </SelectedValue>
        <ArrowIcon disabled={disabled}>
          {isOpen ? <ArrowUp color={disabled ? "#CCD2D4" : "#334A54"} /> : <ArrowDown color={disabled ? "#CCD2D4" : "#334A54"} />}
        </ArrowIcon>
      </DropdownContainer>
      {isOpen && (
        <DropdownList error={error}>
          {options.map((option) => (
            <DropdownItem 
              key={option.value} 
              selected={chips ? selectedValues.includes(option.value) : selectedValues === option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
              {(chips ? selectedValues.includes(option.value) : selectedValues === option.value) && <CheckIcon />}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
      {error && <ErrorMessage>Error message</ErrorMessage>}
    </DropdownWrapper>
  );
};

export default Dropdown;
