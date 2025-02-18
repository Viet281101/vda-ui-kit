import React, { useState } from "react";
import Button from "../components/Button";
import "../styles/buttonsPage.scss";

const ButtonsPage = () => {
  // State lưu trạng thái cuối cùng của từng loại button
  const [selectedState, setSelectedState] = useState({
    primary: "default",
    secondary: "default",
    additional: "default",
  });

  // Hàm xử lý khi click vào nút
  const handleClick = (type, state) => {
    if (state !== "disabled") {
      setSelectedState((prev) => ({ ...prev, [type]: state }));
    }
  };

  return (
    <div className="buttons-page">
      <h2>Buttons</h2>
      <div className="buttons-container">
        {/* Bảng nút bấm */}
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
              <td>
                <Button variant="primary" onClick={() => handleClick("primary", "default")}>Button</Button>
              </td>
              <td>
                <Button variant="primary" className="hover">Button</Button>
              </td>
              <td>
                <Button variant="primary" className="pressed">Button</Button>
              </td>
              <td>
                <Button variant="primary" disabled>Button</Button>
              </td>
              <td>
                <Button variant="primary">{selectedState.primary}</Button>
              </td>
            </tr>

            {/* Secondary Actions */}
            <tr>
              <td>Secondary actions</td>
              <td>
                <Button variant="secondary" onClick={() => handleClick("secondary", "default")}>Button</Button>
              </td>
              <td>
                <Button variant="secondary" className="hover">Button</Button>
              </td>
              <td>
                <Button variant="secondary" className="pressed">Button</Button>
              </td>
              <td>
                <Button variant="secondary" disabled>Button</Button>
              </td>
              <td>
                <Button variant="secondary">{selectedState.secondary}</Button>
              </td>
            </tr>

            {/* Additional Actions */}
            <tr>
              <td>Additional actions</td>
              <td>
                <Button variant="outline" onClick={() => handleClick("additional", "default")}>Button</Button>
              </td>
              <td>
                <Button variant="outline" className="hover">Button</Button>
              </td>
              <td>
                <Button variant="outline" className="pressed">Button</Button>
              </td>
              <td>
                <Button variant="outline" disabled>Button</Button>
              </td>
              <td>
                <Button variant="outline">{selectedState.additional}</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonsPage;
