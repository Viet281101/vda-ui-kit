import React, { useEffect } from "react";

const SwitcherPage = () => {
  useEffect(() => {
    console.log("SwitcherPage Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Switchers</h2>
      <label>
        <input type="checkbox" />
        Off
      </label>
      <br />
      <label>
        <input type="checkbox" checked />
        On
      </label>
    </div>
  );
};

export default SwitcherPage;
