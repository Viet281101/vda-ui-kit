import React, { useEffect } from "react";
import TimePicker from "../components/TimePicker";
import "../styles/textInputPage.scss";

const TimePickerPage = () => {
  useEffect(() => {
    console.log("Time Picker Page Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Time Picker</h2>
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
            <td><TimePicker placeholder="Choose Time" /></td>
          </tr>
          
          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><TimePicker label="Choose Time" alwaysFocused={true} /></td>
          </tr>
          
          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><TimePicker label="Choose Time" alwaysShowLabel={true} /></td>
          </tr>
          
          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><TimePicker label="Choose Time" error={true} /></td>
          </tr>
          
          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><TimePicker label="Choose Time" disabled={true} /></td>
          </tr>
          
          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><TimePicker label="Choose Time" disabled={true} defaultValue="10:30 AM" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimePickerPage;
