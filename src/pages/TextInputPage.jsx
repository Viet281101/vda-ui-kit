import React, { useEffect } from "react";

const TextInputPage = () => {
  useEffect(() => {
    console.log("Text Input Field Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default TextInputPage;
