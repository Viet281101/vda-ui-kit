import React, { useEffect } from "react";
import TextInput from "../components/TextInput";
import "../styles/textInputPage.scss";

const PhoneMaskPage = () => {
  useEffect(() => {
    console.log("Phone Mask Field Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Phone Mask</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Phone Number Input</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td>
              <TextInput phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" />
            </td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td>
              <TextInput label="Phone Number" phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" alwaysFocused={true} />
            </td>
          </tr>

          {/* Label Focused State */}
          <tr>
            <td>Label Focused</td>
            <td>
              <TextInput label="Phone Number" phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" />
            </td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td>
              <TextInput label="Phone Number" phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" alwaysShowLabel={true} />
            </td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td>
              <TextInput label="Phone Number" phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" alwaysShowLabel={true} error={true} />
            </td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td>
              <TextInput label="Phone Number" phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" disabled={true} />
            </td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td>
              <TextInput label="Phone Number" phoneMask={true} phoneFormat="000-000-000" prefix="+19" placeholder="000-000-000" alwaysShowLabel={true} disabled={true} defaultValue="824-325-987" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneMaskPage;
