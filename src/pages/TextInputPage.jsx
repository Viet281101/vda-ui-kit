import React, { useEffect } from "react";
import TextInput from "../components/TextInput";
import "../styles/textInputPage.scss";

const TextInputPage = () => {
  useEffect(() => {
    console.log("Text Input Field Loaded");
  }, []);

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
            <td><TextInput placeholder="Text Input" /></td>
            <td><TextInput placeholder="Text Input" showCounter={true} /></td>
          </tr>
          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><TextInput label="Label" placeholder="Text Input" alwaysFocused ={true} /></td>
            <td><TextInput label="Label" placeholder="Text Input" showCounter={true} alwaysFocused ={true} /></td>
          </tr>
          {/* Label Focused State */}
          <tr>
            <td>Label Focused</td>
            <td><TextInput label="Label" placeholder="Text Input" /></td>
            <td><TextInput label="Label" placeholder="Text Input" showCounter={true} /></td>
          </tr>
          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><TextInput label="Label" placeholder="Text Input" alwaysShowLabel={true} /></td>
            <td><TextInput label="Label" placeholder="Text Input" showCounter={true} alwaysShowLabel={true} /></td>
          </tr>
          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><TextInput label="Label" placeholder="Text Input" alwaysShowLabel={true} error={true} /></td>
            <td><TextInput label="Label" placeholder="Text Input" showCounter={true} alwaysShowLabel={true} error={true} /></td>
          </tr>
          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><TextInput label="Label" placeholder="Text Input" disabled={true} /></td>
            <td><TextInput label="Label" placeholder="Text Input" showCounter={true} disabled={true} /></td>
          </tr>
          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><TextInput label="Label" placeholder="Text Input" alwaysShowLabel={true} disabled={true} defaultValue="Hello" /></td>
            <td><TextInput label="Label" placeholder="Text Input" showCounter={true} alwaysShowLabel={true} disabled={true} defaultValue="Hi" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextInputPage;
