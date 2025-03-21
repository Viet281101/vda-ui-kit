import React, { useEffect } from "react";
import DatePicker from "../components/DatePicker";
import DateTimePicker from "../components/DateTimePicker";
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
            <td><DatePicker placeholder="Choose Date" allowManualInput /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><DatePicker label="Choose Date" alwaysFocused showPlaceholderLabel format="yyyy/dd/mm" /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><DatePicker label="Choose Date" showPlaceholderLabel format="yyyy/mm/dd" /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><DatePicker label="Choose Date" error="Error Syntax Input" format="dd/mm/yyyy" /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><DatePicker label="Choose Date" disabled /></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><DatePicker label="Choose Date" disabled defaultValue="03/21/2025" /></td>
          </tr>

          {/* Multi Date State */}
          <tr>
            <td>Multi Date</td>
            <td><DatePicker multiDate /></td>
          </tr>

          {/* Date Time Picker */}
          <tr>
            <td>Date Time Picker</td>
            <td><DateTimePicker width="410px" label="Choose Date Time" alwaysShowLabel format="dd/mm/yyyy hh:mm AM/PM" showPlaceholderLabel /></td>
          </tr>

          {/* Date Time Picker Error State */}
          <tr>
            <td>Date Time Picker Error State</td>
            <td><DateTimePicker width="410px" label="Choose Date Time" format="dd/mm/yyyy hh:mm AM/PM" error /></td>
          </tr>

          {/* Date Time Picker Disabled State */}
          <tr>
            <td>Date Time Picker Disabled State</td>
            <td><DateTimePicker width="410px" label="Choose Date Time" disabled /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatePickerPage;
