import React, { useEffect, useState } from "react";
import SignatureArea from "../components/SignatureArea";
import "../styles/textAreaPage.scss";

const SignatureAreaPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [signatureExists, setSignatureExists] = useState(false);

  useEffect(() => {
    console.log("Signature Area Page Loaded");
  }, []);

  return (
    <div className="text-area-page">
      <h2>Signature Area</h2>
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
            <td><SignatureArea /></td>
          </tr>

          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><SignatureArea alwaysFocused label="Sign here" /></td>
          </tr>

          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><SignatureArea alwaysShowLabel label="Sign here" onSignatureChange={() => setSignatureExists(true)} /></td>
          </tr>

          {/* Error State */}
          <tr>
            <td>Error</td>
            <td><SignatureArea label="Sign here" error={true} /></td>
          </tr>

          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><SignatureArea label="Sign here" disabled={true} /></td>
          </tr>

          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td>
              <SignatureArea alwaysShowLabel label="Sign here" disabled={isDisabled} onSignatureChange={() => setSignatureExists(true)} />
              
              {/* Button test */}
              <button 
                onClick={() => {setIsDisabled(!isDisabled);}}
                disabled={signatureExists}
                style={{
                  marginTop: "16px",
                  marginLeft: "16px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  backgroundColor: signatureExists ? "#001D29" : "#E1E8ED",
                  color: "black",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {isDisabled ? "Enable Signature" : "Disable Signature"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SignatureAreaPage;
