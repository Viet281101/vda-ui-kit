import React, { useEffect } from "react";

const NumberPage = () => {
  useEffect(() => {
    console.log("Number Page Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default NumberPage;
