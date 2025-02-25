import React, { useEffect } from "react";

const NumberLabelPage = () => {
  useEffect(() => {
    console.log("Number + Label Page Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default NumberLabelPage;
