import React from "react";
import TextInput from "../components/TextInput";
import "../styles/textInputPage.scss";

const TextInputPage = () => {
  return (
    <div className="text-input-page">
      <h2>Text Input</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Text Input</th>
            <th>Text Input with Counter</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td><TextInput placeholder="Label" /></td>
            <td><TextInput placeholder="Label" showCounter={true} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextInputPage;
