import React, { useEffect } from "react";
import TextArea from "../components/TextArea";
import "../styles/textAreaPage.scss";

const TextAreaPage = () => {
  useEffect(() => {
    console.log("Text Area Field Loaded");
  }, []);

  return (
    <div className="text-area-page">
      <h2>Text Area</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Text Area</th>
            <th>Text Area with Counter</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td><TextArea placeholder="Add Note" /></td>
            <td><TextArea placeholder="Add Note" showCounter={true} /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><TextArea label="Label" placeholder="Add Note" alwaysFocused={true} /></td>
            <td><TextArea label="Label" placeholder="Add Note" showCounter={true} alwaysFocused={true} /></td>
          </tr>

          {/* Label Focused State */}
          <tr>
            <td>Label Focused</td>
            <td><TextArea label="Label" placeholder="Add Note" /></td>
            <td><TextArea label="Label" placeholder="Add Note" showCounter={true} /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><TextArea label="Label" placeholder="Add Note" alwaysShowLabel={true} /></td>
            <td><TextArea label="Label" placeholder="Add Note" showCounter={true} alwaysShowLabel={true} /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><TextArea label="Label" placeholder="Add Note" alwaysShowLabel={true} error={true} /></td>
            <td><TextArea label="Label" placeholder="Add Note" showCounter={true} alwaysShowLabel={true} error={true} /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><TextArea label="Label" placeholder="Add Note" disabled={true} /></td>
            <td><TextArea label="Label" placeholder="Add Note" showCounter={true} disabled={true} /></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><TextArea label="Label" placeholder="Add Note" alwaysShowLabel={true} disabled={true} defaultValue="This is a disabled text" /></td>
            <td><TextArea label="Label" placeholder="Add Note" showCounter={true} alwaysShowLabel={true} disabled={true} defaultValue="This is a disabled text" /></td>
          </tr>

          {/* Auto Expand */}
          <tr>
            <td>Auto Expand</td>
            <td><TextArea label="Label" placeholder="Type and see expansion..." autoExpand={true} /></td>
            <td><TextArea label="Label" placeholder="Type and see expansion..." autoExpand={true} showCounter={true} /></td>
          </tr>

          {/* Custom Height */}
          <tr>
            <td>Custom Height (150px)</td>
            <td><TextArea label="Label" placeholder="Custom Height" height="150px" /></td>
            <td><TextArea label="Label" placeholder="Custom Height" height="150px" showCounter={true} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextAreaPage;
