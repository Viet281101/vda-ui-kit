import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const SignatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width || "100%"};
  position: relative;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(10px)")};
`;

const Label = styled.label`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: ${({ error, disabled }) => (error ? "#E71D36" : disabled ? "#66777E" : "#334A54")};
`;

const SignatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ disabled }) => (disabled ? "#F7FBFC" : "#FFFFFF")};
  border: 1px solid ${({ isFocused, error, disabled }) => 
    disabled ? "#E1E8ED" : error ? "#E71D36" : isFocused ? "#001D29" : "#C4CDD5"};
  border-radius: 12px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "110px"};
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;
  gap: 10px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
`;

const Placeholder = styled.span`
  position: absolute;
  top: 8px;
  left: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  color: ${({ error }) => (error ? "#E71D36" : "#99A4A9")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(10px)")};
`;

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 52px;
  height: 16px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #001D29;
  background: none;
  border: none;
  cursor: pointer;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #E71D36;
  padding-left: 16px;
`;

const ClearIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.04984 5.98317L1.78317 9.24984C1.66095 9.37206 1.50539 9.43317 1.3165 9.43317C1.12762 9.43317 0.972059 9.37206 0.849837 9.24984C0.727615 9.12761 0.666504 8.97206 0.666504 8.78317C0.666504 8.59428 0.727615 8.43873 0.849837 8.3165L4.1165 5.04984L0.849837 1.78317C0.727615 1.66095 0.666504 1.50539 0.666504 1.3165C0.666504 1.12762 0.727615 0.972059 0.849837 0.849837C0.972059 0.727615 1.12762 0.666504 1.3165 0.666504C1.50539 0.666504 1.66095 0.727615 1.78317 0.849837L5.04984 4.1165L8.3165 0.849837C8.43873 0.727615 8.59428 0.666504 8.78317 0.666504C8.97206 0.666504 9.12761 0.727615 9.24984 0.849837C9.37206 0.972059 9.43317 1.12762 9.43317 1.3165C9.43317 1.50539 9.37206 1.66095 9.24984 1.78317L5.98317 5.04984L9.24984 8.3165C9.37206 8.43873 9.43317 8.59428 9.43317 8.78317C9.43317 8.97206 9.37206 9.12761 9.24984 9.24984C9.12761 9.37206 8.97206 9.43317 8.78317 9.43317C8.59428 9.43317 8.43873 9.37206 8.3165 9.24984L5.04984 5.98317Z" fill="#001D29"/>
  </svg>
);

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: transparent;
  touch-action: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "crosshair")};
`;

const SignatureArea = ({ 
  label = "Sign here",
  placeholder = "Signature Area",
  width = "329px",
  height = "110px",
  alwaysShowLabel = false,
  alwaysFocused = false,
  error = false,
  errorMessage = "Error message",
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(alwaysFocused);
  const [signature, setSignature] = useState(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignature(null);
  };

  useEffect(() => {
    if (alwaysFocused) {
      setIsFocused(true);
    }
  }, [alwaysFocused]);

  const handleClickOutside = useCallback((event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      if (!alwaysFocused && !signature) {
        setIsFocused(false);
      }
    }
  }, [alwaysFocused, signature]);

  const handleSaveSignature = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");

    if (disabled) {
      const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] > 0) {
          imageData.data[i] = 51;
          imageData.data[i + 1] = 74;
          imageData.data[i + 2] = 84;
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }
    setSignature(canvasRef.current.toDataURL("image/png"));
  };

  useEffect(() => {
    if (signature && !disabled) {
      const ctx = canvasRef.current.getContext("2d");
      const img = new Image();
      img.src = signature;
      img.onload = () => ctx.drawImage(img, 0, 0);
    }
  }, [disabled, signature]);

  const startDrawing = (e) => {
    if (disabled || !isFocused) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(0, 29, 41, 0.9)";

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || disabled || !isFocused) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    handleSaveSignature();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <SignatureWrapper width={width}>
      <LabelRow isVisible={alwaysShowLabel || isFocused || signature}>
        {label && <Label error={error} disabled={disabled}>{label}</Label>}
        <ClearButton isVisible={(isFocused || signature) && !disabled} onClick={handleClear}>
          <ClearIcon />Clear
        </ClearButton>
      </LabelRow>
      <SignatureContainer
        ref={containerRef}
        width={width}
        height={height}
        isFocused={isFocused}
        error={error}
        disabled={disabled}
        onClick={() => !disabled && setIsFocused(true)}
      >
        {!signature && <Placeholder error={error} isVisible={!isFocused}>{placeholder}</Placeholder>}
        {disabled && signature ? (
          <img src={signature} alt="Signature" width="100%" height="100%" style={{ borderRadius: "12px", cursor: "not-allowed" }} />
        ) : (
          <Canvas ref={canvasRef} disabled={disabled}
            width={parseInt(width) + 32}
            height={parseInt(height) + 24}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        )}
      </SignatureContainer>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignatureWrapper>
  );
};

export default SignatureArea;
