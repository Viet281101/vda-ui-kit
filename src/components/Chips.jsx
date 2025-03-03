import React from "react";
import styled from "styled-components";

const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ showText }) => (showText ? "space-between" : "center")};
  gap: 6px;
  padding: 4px 6px;
  min-width: ${({ autoResize, type, width }) => (autoResize ? "auto" : type === "Outlined" ? `calc(${width} - 14px)` : `calc(${width} - 12px)`)};
  max-width: ${({ autoResize, type, width }) => (autoResize ? "max-content" : type === "Outlined" ? `calc(${width} - 14px)` : `calc(${width} - 12px)`)};
  height: ${({ autoResize, type, height }) => (autoResize ? "auto" : type === "Outlined" ? `calc(${height} - 10px)` : `calc(${height} - 8px)`)};
  border-radius: 8px;
  background: ${({ type, state }) => {
    if (type === "Outlined") return "transparent";
    if (state === "disabled") return "#EFF3F4";
    if (state === "hover" || state === "active") return "#EFF3F4";
    return "#F7FBFC";
  }};
  border: ${({ type, state }) => {
    if (type === "Filled") return "none";
    if (state === "disabled") return "1px solid #E5E9EA";
    if (state === "active") return "1px solid #66777E";
    if (state === "hover") return "1px solid #334A54";
    return "1px solid #001D29";
  }};
  color: ${({ state }) => (state === "disabled" ? "#66777E" : "#001D29")};
  margin: 4px;
  font-family: Roboto, sans-serif;
  font-size: ${({ textSize }) => textSize};
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: center;
  cursor: ${({ state }) => (state === "disabled" ? "not-allowed" : "pointer")};
  &:hover {
    background: ${({ type, state }) => {
      if (state === "disabled") return "transparent";
      if (type === "Outlined") return "transparent";
      return "#EFF3F4";
    }};
    border: ${({ type, state }) => {
      if (type === "Filled") return "none";
      if (state === "disabled") return "1px solid #E5E9EA";
      return "1px solid #334A54";
    }};
  }
  &:active {
    background: ${({ type, state }) => {
      if (state === "disabled") return "transparent";
      if (type === "Outlined") return "transparent";
      return "#EFF3F4";
    }};
    border: ${({ type, state }) => {
      if (type === "Filled") return "none";
      if (state === "disabled") return "1px solid #E5E9EA";
      return "1px solid #66777E";
    }};
  }
`;

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.41675 5.58317H1.50008C1.3348 5.58317 1.19626 5.52727 1.08446 5.41546C0.972651 5.30366 0.916748 5.16511 0.916748 4.99984C0.916748 4.83456 0.972651 4.69602 1.08446 4.58421C1.19626 4.47241 1.3348 4.4165 1.50008 4.4165H4.41675V1.49984C4.41675 1.33456 4.47265 1.19602 4.58446 1.08421C4.69626 0.972407 4.8348 0.916504 5.00008 0.916504C5.16536 0.916504 5.3039 0.972407 5.41571 1.08421C5.52751 1.19602 5.58341 1.33456 5.58341 1.49984V4.4165H8.50008C8.66536 4.4165 8.8039 4.47241 8.91571 4.58421C9.02751 4.69602 9.08341 4.83456 9.08341 4.99984C9.08341 5.16511 9.02751 5.30366 8.91571 5.41546C8.8039 5.52727 8.66536 5.58317 8.50008 5.58317H5.58341V8.49984C5.58341 8.66511 5.52751 8.80366 5.41571 8.91546C5.3039 9.02727 5.16536 9.08317 5.00008 9.08317C4.8348 9.08317 4.69626 9.02727 4.58446 8.91546C4.47265 8.80366 4.41675 8.66511 4.41675 8.49984V5.58317Z" fill="#001D29"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.04367 4.86009L1.18534 7.71842C1.07839 7.82537 0.94228 7.87884 0.777002 7.87884C0.611724 7.87884 0.475613 7.82537 0.368669 7.71842C0.261724 7.61148 0.208252 7.47537 0.208252 7.31009C0.208252 7.14481 0.261724 7.0087 0.368669 6.90176L3.227 4.04342L0.368669 1.18509C0.261724 1.07815 0.208252 0.942036 0.208252 0.776758C0.208252 0.61148 0.261724 0.475369 0.368669 0.368424C0.475613 0.26148 0.611724 0.208008 0.777002 0.208008C0.94228 0.208008 1.07839 0.26148 1.18534 0.368424L4.04367 3.22676L6.902 0.368424C7.00895 0.26148 7.14506 0.208008 7.31034 0.208008C7.47561 0.208008 7.61172 0.26148 7.71867 0.368424C7.82561 0.475369 7.87909 0.61148 7.87909 0.776758C7.87909 0.942036 7.82561 1.07815 7.71867 1.18509L4.86034 4.04342L7.71867 6.90176C7.82561 7.0087 7.87909 7.14481 7.87909 7.31009C7.87909 7.47537 7.82561 7.61148 7.71867 7.71842C7.61172 7.82537 7.47561 7.87884 7.31034 7.87884C7.14506 7.87884 7.00895 7.82537 6.902 7.71842L4.04367 4.86009Z" fill="#334A54"/>
  </svg>
);

const Chip = ({
  width = "77px",  
  height = "22px", 
  autoResize = false,
  textSize = "12px",
  label = "Chip", 
  type = "Filled",
  state = "default", 
  showLeftIcon = true, 
  showRightIcon = true, 
  showText = true, 
  color = "black", 
  onDelete 
}) => {
  return (
    <ChipWrapper state={state} type={type} width={width} height={height} autoResize={autoResize} textSize={textSize} showText={showText} style={{ color }} >
      {showLeftIcon && (<div style={{minWidth: "14px", minHeight: "14px"}} ><PlusIcon /></div>)}
      {showText && label}
      {showRightIcon && (
        <div 
          style={{ cursor: state === "disabled" ? "not-allowed" : "pointer", minWidth: "14px", minHeight: "14px" }} 
          onClick={(e) => {
            e.stopPropagation();
            if (onDelete && state !== "disabled") onDelete();
          }}
        >
          <CloseIcon />
        </div>
      )}
    </ChipWrapper>
  );
};

export default Chip;
