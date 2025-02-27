import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
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

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const SelectedValue = styled.div`
  width: 329px;
  height: 19px;
  padding: 12px 16px;
  padding-right: 40px;
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

const Dropdown = ({
  label,
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
  width = "361px",
  height = "80px",
  error = false,
  disabled = false
}) => {
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

  return (
    <DropdownWrapper width={width} height={height} ref={dropdownRef}>
      {label && <Label isVisible={true} error={error}>{label}</Label>}
      <DropdownContainer disabled={disabled} onClick={() => !disabled && setIsOpen(!isOpen)}>
        <SelectedValue isFocused={isOpen} disabled={disabled} error={error}>
          {value ? options.find(opt => opt.value === value)?.label : placeholder}
        </SelectedValue>
        <ArrowIcon disabled={disabled}>
          {isOpen ? <ArrowUp color={disabled ? "#CCD2D4" : "#334A54"} /> : <ArrowDown color={disabled ? "#CCD2D4" : "#334A54"} />}
        </ArrowIcon>
      </DropdownContainer>
      {error && <ErrorMessage>Error message</ErrorMessage>}
    </DropdownWrapper>
  );
};

export default Dropdown;
