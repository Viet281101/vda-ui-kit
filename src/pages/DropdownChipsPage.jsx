import React from "react";
import Dropdown from "../components/Dropdown";
import "../styles/dropdownPage.scss";

const DropdownChipsPage = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
    { value: "option9", label: "Option 9" },
    { value: "option10", label: "Option 10" }
  ];

  return (
    <div className="dropdown-page">
      <h2>Dropdown + Chips</h2>
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
            <td><Dropdown options={options} chips={true} /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><Dropdown label="Dropdown" options={options} chips={true} /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><Dropdown label="Dropdown" options={options} chips={true} /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><Dropdown label="Dropdown" options={options} chips={true} error={true} /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><Dropdown label="Dropdown" options={options} chips={true} disabled={true} /></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><Dropdown label="Dropdown" options={options} chips={true} value={["option1", "option3"]} disabled={true} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DropdownChipsPage;
