import React from "react";

const CheckboxPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkboxes</h2>
      <label>
        <input type="checkbox" />
        Default
      </label>
      <br />
      <label>
        <input type="checkbox" checked />
        Checked
      </label>
      <br />
      <label>
        <input type="checkbox" disabled />
        Disabled
      </label>
    </div>
  );
};

export default CheckboxPage;
