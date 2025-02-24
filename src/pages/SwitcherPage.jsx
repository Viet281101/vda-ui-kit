import React, { useState } from "react";
import Switcher from "../components/Switcher";
import "../styles/checkboxPage.scss";

const SwitcherPage = () => {
  const [, setIsSwitcherOn] = useState(false);

  return (
    <div className="checkbox-page">
      <h2>Switchers</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Label</th>
            <th>Switcher</th>
            <th>Label with Info</th>
          </tr>
        </thead>
        <tbody>
          {/* Enabled / Off */}
          <tr>
            <td>Enabled / Off</td>
            <td><Switcher label="Text option" onChange={setIsSwitcherOn} /></td>
            <td><Switcher onChange={setIsSwitcherOn} /></td>
            <td><Switcher label="Text option" position="labelInfo" onChange={setIsSwitcherOn} /></td>
          </tr>

          {/* Enabled / On */}
          <tr>
            <td>Enabled / On</td>
            <td><Switcher label="Text option" defaultChecked={true} onChange={setIsSwitcherOn} /></td>
            <td><Switcher defaultChecked={true} onChange={setIsSwitcherOn} /></td>
            <td><Switcher label="Text option" position="labelInfo" defaultChecked={true} onChange={setIsSwitcherOn} /></td>
          </tr>

          {/* Disabled / Off */}
          <tr>
            <td>Disabled / Off</td>
            <td><Switcher label="Text option" disabled /></td>
            <td><Switcher disabled /></td>
            <td><Switcher label="Text option" position="labelInfo" disabled /></td>
          </tr>

          {/* Disabled / On */}
          <tr>
            <td>Disabled / On</td>
            <td><Switcher label="Text option" disabled defaultChecked={true} /></td>
            <td><Switcher disabled defaultChecked={true} /></td>
            <td><Switcher label="Text option" position="labelInfo" disabled defaultChecked={true} /></td>
          </tr>

          {/* Error */}
          <tr>
            <td>Error</td>
            <td><Switcher label="Text option" error /></td>
            <td><Switcher error /></td>
            <td><Switcher label="Text option" position="labelInfo" error /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SwitcherPage;
