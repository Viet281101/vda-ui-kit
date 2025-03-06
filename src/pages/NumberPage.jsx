import React, { useEffect } from "react";
import NumberInput from "../components/NumberInput";
import "../styles/textInputPage.scss";

const NumberPage = () => {
  useEffect(() => {
    console.log("Number Page Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Number Input</h2>
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
            <td><NumberInput placeholder="Number" /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><NumberInput label="Number" alwaysFocused ={true} /></td>
          </tr>

          {/* Label Focused State */}
          <tr>
            <td>Label Focused</td>
            <td><NumberInput label="Number" /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><NumberInput label="Number" alwaysShowLabel={true} /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><NumberInput label="Number" alwaysShowLabel={true} defaultValue="0" error={true} showArrow={true} /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><NumberInput placeholder="Number" disabled/></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><NumberInput label="Number" alwaysShowLabel={true} defaultValue="0" showArrow={false} disabled/></td>
          </tr>

          {/* Min/Max Limit */}
          <tr>
            <td>Min/Max Limit</td>
            <td><NumberInput /></td>
          </tr>

          {/* Custom Step */}
          <tr>
            <td>Custom Step (5)</td>
            <td><NumberInput /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NumberPage;
