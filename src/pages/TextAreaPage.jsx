import React, { useEffect } from "react";

const TextAreaPage = () => {
  useEffect(() => {
    console.log("Text Area Page Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default TextAreaPage;
