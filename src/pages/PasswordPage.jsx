import React, { useEffect } from "react";
import PasswordInput from "../components/Password";
import "../styles/textInputPage.scss";

const PasswordPage = () => {
  useEffect(() => {
    console.log("Password Input Field Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Password Input</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Password Visible</th>
            <th>Password Invisible</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td><PasswordInput placeholder="Password" defaultVisible={true} /></td>
            <td><PasswordInput placeholder="Password" /></td>
          </tr>
          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><PasswordInput label="Password" placeholder="Password" alwaysFocused={true} defaultVisible={true} /></td>
            <td><PasswordInput label="Password" placeholder="Password" alwaysFocused={true} /></td>
          </tr>
          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><PasswordInput label="Password" placeholder="Password" showCounter={true} alwaysShowLabel={true} defaultVisible={true} /></td>
            <td><PasswordInput label="Password" placeholder="Password" showCounter={true} alwaysShowLabel={true} /></td>
          </tr>
          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><PasswordInput label="Password" placeholder="Password" error={true} defaultVisible={true} /></td>
            <td><PasswordInput label="Password" placeholder="Password" error={true} /></td>
          </tr>
          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><PasswordInput label="Password" placeholder="Password" disabled={true} defaultVisible={true} /></td>
            <td><PasswordInput label="Password" placeholder="Password" disabled={true} /></td>
          </tr>
          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><PasswordInput label="Password" placeholder="Password" disabled={true} defaultValue="MyPassword123" defaultVisible={true} /></td>
            <td><PasswordInput label="Password" placeholder="Password" disabled={true} defaultValue="MyPassword123" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PasswordPage;
