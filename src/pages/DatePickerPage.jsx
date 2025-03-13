import React, { useEffect } from "react";
import DatePicker from "../components/DatePicker";
import "../styles/textInputPage.scss";

const DatePickerPage = () => {
  useEffect(() => {
    console.log("Date Picker Page Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Date Picker</h2>
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
            <td><DatePicker placeholder="Choose Date" /></td>
          </tr>
          
          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><DatePicker label="Choose Date" alwaysFocused={true} showPlaceholderLabel /></td>
          </tr>
          
          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><DatePicker label="Choose Date" showPlaceholderLabel /></td>
          </tr>
          
          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><DatePicker label="Choose Date" error={true} /></td>
          </tr>
          
          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><DatePicker label="Choose Date" disabled={true} /></td>
          </tr>
          
          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><DatePicker label="Choose Date" disabled={true} /></td>
          </tr>

          {/* Multi Date State */}
          <tr>
            <td>Multi Date</td>
            <td><DatePicker multiDate /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatePickerPage;
