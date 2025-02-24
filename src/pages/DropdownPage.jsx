import React, { useEffect } from "react";

const DropdownPage = () => {
  useEffect(() => {
    console.log("Dropdown Page Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      Test
    </div>
  );
};

export default DropdownPage;
