import React from "react";
import Chip from "../components/Chips";
import "../styles/chipsPage.scss";

const ChipsPage = () => {
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
        </tbody>
      </table>
    </div>
  );
};

export default ChipsPage;
