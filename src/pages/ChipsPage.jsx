import React, { useEffect } from "react";

const ChipsPage = () => {
  useEffect(() => {
    console.log("Chips Page Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default ChipsPage;
