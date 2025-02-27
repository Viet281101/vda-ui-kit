import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import "../styles/dropdownPage.scss";

const DropdownPage = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className="dropdown-page">
      <h2>Dropdown</h2>
      <table>
        <thead>
          <tr>
            <th>Dropdown States</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td><Dropdown label="Dropdown" options={options} value={selectedValue} onChange={setSelectedValue} /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><Dropdown label="Dropdown" options={options} value={selectedValue} onChange={setSelectedValue} /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><Dropdown label="Dropdown" options={options} value="option2" onChange={setSelectedValue} /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><Dropdown label="Dropdown" options={options} value={selectedValue} onChange={setSelectedValue} error={true} /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><Dropdown label="Dropdown" options={options} disabled={true} /></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><Dropdown label="Dropdown" options={options} value="option1" disabled={true} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DropdownPage;
