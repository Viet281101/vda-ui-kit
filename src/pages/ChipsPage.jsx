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
            <td><Chip label="Chip" showText={true} showLeftIcon={true} showRightIcon={true} state="template" /></td>
            <td><Chip label="Chip" state="default" /></td>
            <td><Chip label="Chip" state="hover" /></td>
            <td><Chip label="Chip" state="active" /></td>
            <td><Chip label="Chip" state="disabled" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChipsPage;
