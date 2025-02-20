import React, { useState } from "react";
import RadioButton from "../components/RadioButton";
import "../styles/checkboxPage.scss";

const RadioButtonPage = () => {
  const [selectedRadioGroup1, setSelectedRadioGroup1] = useState(null);
  const [selectedRadioGroup2, setSelectedRadioGroup2] = useState("1");

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
            <td><RadioButton name="group1" value="1" label="Text option" position="labelLeft" selectedRadio={selectedRadioGroup1} onChange={setSelectedRadioGroup1} /></td>
            <td><RadioButton name="group1" value="2" label="Text option" position="labelRight" selectedRadio={selectedRadioGroup1} onChange={setSelectedRadioGroup1} /></td>
            <td><RadioButton name="group1" value="3" selectedRadio={selectedRadioGroup1} onChange={setSelectedRadioGroup1} /></td>
            <td><RadioButton name="group1" value="4" label="Text option" position="labelInfo" selectedRadio={selectedRadioGroup1} onChange={setSelectedRadioGroup1} /></td>
          </tr>

          {/* Enabled / On */}
          <tr>
            <td>Enabled / On</td>
            <td><RadioButton name="group2" value="1" label="Text option" position="labelLeft" selectedRadio={selectedRadioGroup2} onChange={setSelectedRadioGroup2} /></td>
            <td><RadioButton name="group2" value="2" label="Text option" position="labelRight" selectedRadio={selectedRadioGroup2} onChange={setSelectedRadioGroup2} /></td>
            <td><RadioButton name="group2" value="3" selectedRadio={selectedRadioGroup2} onChange={setSelectedRadioGroup2} /></td>
            <td><RadioButton name="group2" value="4" label="Text option" position="labelInfo" selectedRadio={selectedRadioGroup2} onChange={setSelectedRadioGroup2} /></td>
          </tr>

          {/* Disabled / Off */}
          <tr>
            <td>Disabled / Off</td>
            <td><RadioButton name="group3" value="1" label="Text option" disabled position="labelLeft" /></td>
            <td><RadioButton name="group3" value="2" label="Text option" disabled position="labelRight" /></td>
            <td><RadioButton name="group3" value="3" disabled /></td>
            <td><RadioButton name="group3" value="4" label="Text option" disabled position="labelInfo" /></td>
          </tr>

          {/* Disabled / On */}
          <tr>
            <td>Disabled / On</td>
            <td><RadioButton name="group4" value="1" label="Text option" disabled defaultChecked position="labelLeft" /></td>
            <td><RadioButton name="group4" value="2" label="Text option" disabled defaultChecked position="labelRight" /></td>
            <td><RadioButton name="group4" value="3" disabled defaultChecked /></td>
            <td><RadioButton name="group4" value="4" label="Text option" disabled defaultChecked position="labelInfo" /></td>
          </tr>

          {/* Error */}
          <tr>
            <td>Error</td>
            <td><RadioButton name="group5" value="1" label="Text option" error position="labelLeft" /></td>
            <td><RadioButton name="group5" value="2" label="Text option" error position="labelRight" /></td>
            <td><RadioButton name="group5" value="3" error /></td>
            <td><RadioButton name="group5" value="4" label="Text option" error position="labelInfo" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RadioButtonPage;
