import React, { useEffect } from "react";

const SwitcherPage = () => {
  useEffect(() => {
    console.log("SwitcherPage Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default SwitcherPage;
