import React from "react";
import RadioButton from "../components/RadioButton";
import "../styles/checkboxPage.scss";

const RadioButtonPage = () => {
  return (
    <div className="checkbox-page">
      <h2>Radio Buttons</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Label Left</th>
            <th>Label Right</th>
            <th>Radio Only</th>
            <th>Label with Info</th>
          </tr>
        </thead>
        <tbody>
          {/* Enabled / Off */}
          <tr>
            <td>Enabled / Off</td>
            <td><RadioButton label="Text option" position="labelLeft" /></td>
            <td><RadioButton label="Text option" position="labelRight" /></td>
            <td><RadioButton /></td>
            <td><RadioButton label="Text option" position="labelInfo" /></td>
          </tr>

          {/* Enabled / On */}
          <tr>
            <td>Enabled / On</td>
            <td><RadioButton label="Text option" position="labelLeft" checked /></td>
            <td><RadioButton label="Text option" position="labelRight" checked /></td>
            <td><RadioButton checked /></td>
            <td><RadioButton label="Text option" position="labelInfo" checked /></td>
          </tr>

          {/* Disabled / Off */}
          <tr>
            <td>Disabled / Off</td>
            <td><RadioButton label="Text option" disabled position="labelLeft" /></td>
            <td><RadioButton label="Text option" disabled position="labelRight" /></td>
            <td><RadioButton disabled /></td>
            <td><RadioButton label="Text option" disabled position="labelInfo" /></td>
          </tr>

          {/* Disabled / On */}
          <tr>
            <td>Disabled / On</td>
            <td><RadioButton label="Text option" disabled checked position="labelLeft" /></td>
            <td><RadioButton label="Text option" disabled checked position="labelRight" /></td>
            <td><RadioButton disabled checked /></td>
            <td><RadioButton label="Text option" disabled checked position="labelInfo" /></td>
          </tr>

          {/* Error */}
          <tr>
            <td>Error</td>
            <td><RadioButton label="Text option" error position="labelLeft" /></td>
            <td><RadioButton label="Text option" error position="labelRight" /></td>
            <td><RadioButton error /></td>
            <td><RadioButton label="Text option" error position="labelInfo" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RadioButtonPage;
