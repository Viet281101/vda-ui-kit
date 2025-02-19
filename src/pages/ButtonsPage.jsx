import React from "react";
import Button from "../components/Button";
import "../styles/buttonsPage.scss";

const ButtonsPage = () => {
  return (
    <div className="buttons-page">
      <h2>Buttons</h2>

      {/* Table 1 */}
      <div className="buttons-container">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Default</th>
              <th>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary actions</td>
              <td><Button type="primary">Button</Button></td>
              <td><Button type="primary" disabled>Button</Button></td>
            </tr>
            <tr>
              <td>Secondary actions</td>
              <td><Button type="secondary">Button</Button></td>
              <td><Button type="secondary" disabled>Button</Button></td>
            </tr>
            <tr>
              <td>Additional actions</td>
              <td><Button type="additional">Button</Button></td>
              <td><Button type="additional" disabled>Button</Button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2 */}
      <div className="buttons-container">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Default</th>
              <th>Disabled</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Primary actions</td>
              <td><Button type="primary1">Button</Button></td>
              <td><Button type="primary1" disabled>Button</Button></td>
            </tr>
            <tr>
              <td>Secondary actions</td>
              <td><Button type="secondary1">Button</Button></td>
              <td><Button type="secondary1" disabled>Button</Button></td>
            </tr>
            <tr>
              <td>Additional actions</td>
              <td><Button type="outline1">Button</Button></td>
              <td><Button type="outline1" disabled>Button</Button></td>
            </tr>
            <tr>
              <td></td>
              <td><Button type="outline2">Button</Button></td>
              <td><Button type="outline2" disabled>Button</Button></td>
            </tr>
            <tr>
              <td></td>
              <td><Button type="outline3">Button</Button></td>
              <td><Button type="outline3" disabled>Button</Button></td>
            </tr>
            <tr>
              <td></td>
              <td><Button type="outline4">Button</Button></td>
              <td><Button type="outline4" disabled>Button</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonsPage;