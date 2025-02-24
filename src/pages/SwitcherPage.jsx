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
        </tbody>
      </table>
    </div>
  );
};

export default SwitcherPage;
