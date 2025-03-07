import React, { useEffect } from "react";
import NumberInput from "../components/NumberInput";
import "../styles/textInputPage.scss";

const NumberPage = () => {
  useEffect(() => {
    console.log("Number Label Page Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Number Label Input</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Component</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td><NumberInput placeholder="Number" labelLeft="Label" labelRight="Label" /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><NumberInput alwaysFocused ={true} labelLeft="Label" labelRight="Label" /></td>
          </tr>

          {/* Label Focused State */}
          <tr>
            <td>Label Focused</td>
            <td><NumberInput placeholder="Number" labelLeft="Label" labelRight="Label" /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><NumberInput defaultValue="0" labelLeft="Label" labelRight="Label" /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><NumberInput defaultValue="0" error={true} showArrow={true} labelLeft="Label" labelRight="Label" /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><NumberInput labelLeft="Label" labelRight="Label" disabled/></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><NumberInput defaultValue="0" showArrow={false} labelLeft="Label" labelRight="Label" disabled/></td>
          </tr>

          {/* Min/Max Limit */}
          <tr>
            <td>Min/Max Limit (-100 / 100)</td>
            <td><NumberInput labelFocused="Number" placeholder="Number" minLimit={-100} maxLimit={100} /></td>
          </tr>

          {/* Custom Step */}
          <tr>
            <td>Custom Step (5)</td>
            <td><NumberInput labelFocused="Number" placeholder="Number" customStep={5} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NumberPage;
