import React from "react";
import Checkbox from "../components/Checkbox";
import "../styles/checkboxPage.scss";

const CheckboxPage = () => {
  return (
    <div className="checkbox-page">
      <h2>Checkboxes</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Label Left</th>
            <th>Label Right</th>
            <th>Checkbox Only</th>
            <th>Label with Info</th>
          </tr>
        </thead>
        <tbody>
          {/* Enabled / Off */}
          <tr>
            <td>Enabled / Off</td>
            <td><Checkbox label="Text option" position="labelLeft"/></td>
            <td><Checkbox label="Text option" position="labelRight"/></td>
            <td><Checkbox/></td>
            <td><Checkbox label="Text option" position="labelInfo"/></td>
          </tr>

          {/* Enabled / On */}
          <tr>
            <td>Enabled / On</td>
            <td><Checkbox label="Text option" position="labelLeft" defaultChecked={true} /></td>
            <td><Checkbox label="Text option" position="labelRight" defaultChecked={true} /></td>
            <td><Checkbox defaultChecked={true} /></td>
            <td><Checkbox label="Text option" position="labelInfo" defaultChecked={true} /></td>
          </tr>

          {/* Disabled / Off */}
          <tr>
            <td>Disabled / Off</td>
            <td><Checkbox label="Text option" disabled position="labelLeft"/></td>
            <td><Checkbox label="Text option" disabled position="labelRight"/></td>
            <td><Checkbox disabled/></td>
            <td><Checkbox label="Text option" disabled position="labelInfo"/></td>
          </tr>

          {/* Disabled / On */}
          <tr>
            <td>Disabled / On</td>
            <td><Checkbox label="Text option" disabled position="labelLeft" defaultChecked={true} /></td>
            <td><Checkbox label="Text option" disabled position="labelRight" defaultChecked={true} /></td>
            <td><Checkbox disabled defaultChecked={true} /></td>
            <td><Checkbox label="Text option" disabled position="labelInfo" defaultChecked={true} /></td>
          </tr>

          {/* Error */}
          <tr>
            <td>Error</td>
            <td><Checkbox label="Text option" error position="labelLeft"/></td>
            <td><Checkbox label="Text option" error position="labelRight"/></td>
            <td><Checkbox error/></td>
            <td><Checkbox label="Text option" error position="labelInfo"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckboxPage;
