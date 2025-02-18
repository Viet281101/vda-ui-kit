import React, { useState } from "react";
import Button from "../components/Button";
import ButtonSecondary from "../components/ButtonSecondary";
import "../styles/buttonsPage.scss";

const ButtonsPage = () => {
  const [selectedState, setSelectedState] = useState({
    primary: "default",
    secondary: "default",
    additional: "default",
  });

  const handleClick = (type, state) => {
    if (state !== "disabled") {
      setSelectedState((prev) => ({ ...prev, [type]: state }));
    }
  };

  return (
    <div className="buttons-page">
      <h2>Buttons</h2>

      {/* Table Buttons 1 */}
      <div className="buttons-container">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Default</th>
              <th>Hovered</th>
              <th>Pressed</th>
              <th>Disabled</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            {/* Primary Actions */}
            <tr>
              <td>Primary actions</td>
              <td><Button variant="primary" onClick={() => handleClick("primary", "default")}>Button</Button></td>
              <td><Button variant="primary" className="hover">Button</Button></td>
              <td><Button variant="primary" className="pressed">Button</Button></td>
              <td><Button variant="primary" disabled>Button</Button></td>
              <td><Button variant="primary">{selectedState.primary}</Button></td>
            </tr>

            {/* Secondary Actions */}
            <tr>
              <td>Secondary actions</td>
              <td><Button variant="secondary" onClick={() => handleClick("secondary", "default")}>Button</Button></td>
              <td><Button variant="secondary" className="hover">Button</Button></td>
              <td><Button variant="secondary" className="pressed">Button</Button></td>
              <td><Button variant="secondary" disabled>Button</Button></td>
              <td><Button variant="secondary">{selectedState.secondary}</Button></td>
            </tr>

            {/* Additional Actions */}
            <tr>
              <td>Additional actions</td>
              <td><Button variant="outline" onClick={() => handleClick("additional", "default")}>Button</Button></td>
              <td><Button variant="outline" className="hover">Button</Button></td>
              <td><Button variant="outline" className="pressed">Button</Button></td>
              <td><Button variant="outline" disabled>Button</Button></td>
              <td><Button variant="outline">{selectedState.additional}</Button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Buttons 2 */}
      <div className="buttons-container">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Default</th>
              <th>Hovered</th>
              <th>Pressed</th>
              <th>Disabled</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary actions</td>
              <td><ButtonSecondary variant="primary1">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="primary1" className="hover">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="primary1" className="pressed">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="primary1" disabled>Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="primary1">{selectedState.primary}</ButtonSecondary></td>
            </tr>
            <tr>
              <td>Secondary actions</td>
              <td><ButtonSecondary variant="secondary1">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="secondary1" className="hover">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="secondary1" className="pressed">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="secondary1" disabled>Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="secondary1">{selectedState.secondary}</ButtonSecondary></td>
            </tr>
            <tr>
              <td>Additional actions</td>
              <td><ButtonSecondary variant="outline1">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline1" className="hover">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline1" className="pressed">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline1" disabled>Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline1">{selectedState.additional}</ButtonSecondary></td>
            </tr>
            <tr>
              <td></td>
              <td><ButtonSecondary variant="outline2">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline2" className="hover">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline2" className="pressed">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline2" disabled>Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline2">{selectedState.additional}</ButtonSecondary></td>
            </tr>
            <tr>
              <td></td>
              <td><ButtonSecondary variant="outline3">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline3" className="hover">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline3" className="pressed">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline3" disabled>Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline3">{selectedState.additional}</ButtonSecondary></td>
            </tr>
            <tr>
              <td></td>
              <td><ButtonSecondary variant="outline4">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline4" className="hover">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline4" className="pressed">Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline4" disabled>Button</ButtonSecondary></td>
              <td><ButtonSecondary variant="outline4">{selectedState.additional}</ButtonSecondary></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonsPage;
