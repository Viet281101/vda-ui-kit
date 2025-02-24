import React, { useState } from "react";
import styled from "styled-components";

const SwitcherWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ textColor }) => textColor};
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const SwitcherTrack = styled.span`
  width: 36px;
  height: 14px;
  border-radius: 16px;
  background: ${({ disabled, error }) => {
    if (error) return "#F8BBC3";
    if (disabled) return "#CCD2D4";
    return "#E5E9EA";
  }};
  position: relative;
  transition: background 0.3s ease-in-out;
`;

const SwitcherThumb = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ isOn, disabled, error }) => {
    if (error) return "#E71D36";
    if (disabled) return isOn ? "#66777E" : "#99A4A9";
    return isOn ? "#007EB0" : "#99A4A9";
  }};
  position: absolute;
  top: -3px;
  left: ${({ isOn }) => (isOn ? "16px" : "0px")};
  transition: left 0.3s ease-in-out, background 0.3s ease-in-out;
`;

const LabelText = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
`;

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.00004 10.3335C7.18893 10.3335 7.34726 10.2696 7.47504 10.1418C7.60282 10.0141 7.66671 9.85572 7.66671 9.66683V7.00016C7.66671 6.81127 7.60282 6.65294 7.47504 6.52516C7.34726 6.39739 7.18893 6.3335 7.00004 6.3335C6.81115 6.3335 6.65282 6.39739 6.52504 6.52516C6.39726 6.65294 6.33337 6.81127 6.33337 7.00016V9.66683C6.33337 9.85572 6.39726 10.0141 6.52504 10.1418C6.65282 10.2696 6.81115 10.3335 7.00004 10.3335ZM7.00004 5.00016C7.18893 5.00016 7.34726 4.93627 7.47504 4.8085C7.60282 4.68072 7.66671 4.52239 7.66671 4.3335C7.66671 4.14461 7.60282 3.98627 7.47504 3.8585C7.34726 3.73072 7.18893 3.66683 7.00004 3.66683C6.81115 3.66683 6.65282 3.73072 6.52504 3.8585C6.39726 3.98627 6.33337 4.14461 6.33337 4.3335C6.33337 4.52239 6.39726 4.68072 6.52504 4.8085C6.65282 4.93627 6.81115 5.00016 7.00004 5.00016ZM7.00004 13.6668C6.07782 13.6668 5.21115 13.4918 4.40004 13.1418C3.58893 12.7918 2.88337 12.3168 2.28337 11.7168C1.68337 11.1168 1.20837 10.4113 0.858374 9.60016C0.508374 8.78905 0.333374 7.92239 0.333374 7.00016C0.333374 6.07794 0.508374 5.21127 0.858374 4.40016C1.20837 3.58905 1.68337 2.8835 2.28337 2.2835C2.88337 1.6835 3.58893 1.2085 4.40004 0.858496C5.21115 0.508496 6.07782 0.333496 7.00004 0.333496C7.92226 0.333496 8.78893 0.508496 9.60004 0.858496C10.4112 1.2085 11.1167 1.6835 11.7167 2.2835C12.3167 2.8835 12.7917 3.58905 13.1417 4.40016C13.4917 5.21127 13.6667 6.07794 13.6667 7.00016C13.6667 7.92239 13.4917 8.78905 13.1417 9.60016C12.7917 10.4113 12.3167 11.1168 11.7167 11.7168C11.1167 12.3168 10.4112 12.7918 9.60004 13.1418C8.78893 13.4918 7.92226 13.6668 7.00004 13.6668ZM7.00004 12.3335C8.48893 12.3335 9.75004 11.8168 10.7834 10.7835C11.8167 9.75016 12.3334 8.48905 12.3334 7.00016C12.3334 5.51127 11.8167 4.25016 10.7834 3.21683C9.75004 2.1835 8.48893 1.66683 7.00004 1.66683C5.51115 1.66683 4.25004 2.1835 3.21671 3.21683C2.18337 4.25016 1.66671 5.51127 1.66671 7.00016C1.66671 8.48905 2.18337 9.75016 3.21671 10.7835C4.25004 11.8168 5.51115 12.3335 7.00004 12.3335Z" fill="#001D29"/>
  </svg>
);

const Switcher = ({ label, disabled, error, defaultChecked = false, position = "labelLeft", onChange }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  const handleClick = () => {
    if (!disabled) {
      setIsOn((prev) => !prev);
      if (onChange) onChange(!isOn);
    }
  };

  const textColor = error
    ? "#E71D36"
    : disabled
    ? isOn
      ? "#66777E"
      : "#99A4A9"
    : "#001D29";

  return (
    <SwitcherWrapper onClick={handleClick} disabled={disabled} textColor={textColor}>
      {label && <LabelText>{label}</LabelText>}
      <HiddenCheckbox checked={isOn} onChange={handleClick} disabled={disabled} />
      {position === "labelInfo" && <InfoIcon />}
      <SwitcherTrack isOn={isOn} disabled={disabled} error={error}>
        <SwitcherThumb isOn={isOn} disabled={disabled} error={error} />
      </SwitcherTrack>
    </SwitcherWrapper>
  );
};

export default Switcher;
