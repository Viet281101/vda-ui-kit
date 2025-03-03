import React, { useState } from "react";
import Chip from "../components/Chips";
import "../styles/chipsPage.scss";

const ChipsPage = () => {
  const [chips, setChips] = useState([
    { id: 1, type: "Filled", label: "Chip 1" },
    { id: 2, type: "Filled", label: "Chip 2" },
    { id: 3, type: "Outlined", label: "Chip 3" },
    { id: 4, type: "Outlined", label: "Chip 4" }
  ]);

  const handleDelete = (id) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== id));
  };

  return (
    <div className="chips-page">
      <h2>Chips</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Template</th>
            <th>Default</th>
            <th>Hover</th>
            <th>Active</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          {/* ROW 1: FILLED CHIPS */}
          <tr>
            <td>Filled</td>
            <td><Chip type="Filled" label="Chip" showText={true} showLeftIcon={true} showRightIcon={true} state="template" /></td>
            <td><Chip type="Filled" label="Chip" state="default" /></td>
            <td><Chip type="Filled" label="Chip" state="hover" /></td>
            <td><Chip type="Filled" label="Chip" state="active" /></td>
            <td><Chip type="Filled" label="Chip" state="disabled" /></td>
          </tr>
          {/* ROW 2: OUTLINED CHIPS */}
          <tr>
            <td>Outlined</td>
            <td><Chip type="Outlined" label="Chip" showText={true} showLeftIcon={true} showRightIcon={true} state="template" /></td>
            <td><Chip type="Outlined" label="Chip" state="default" /></td>
            <td><Chip type="Outlined" label="Chip" state="hover" /></td>
            <td><Chip type="Outlined" label="Chip" state="active" /></td>
            <td><Chip type="Outlined" label="Chip" state="disabled" /></td>
          </tr>
          {/* ROW 3: TEST DELETE CHIP */}
          <tr>
            <td>Deletable Chips</td>
            <td colSpan="5">
              {chips.length > 0 ? (
                chips.map((chip) => (
                  <Chip 
                    key={chip.id}
                    type={chip.type}
                    label={chip.label}
                    width="80px"
                    showText={true}
                    showLeftIcon={true}
                    showRightIcon={true}
                    onDelete={() => handleDelete(chip.id)}
                  />
                ))
              ) : (
                <p>No chips left</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChipsPage;
