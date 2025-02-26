import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/textInputPage.scss";

const SearchPage = () => {
  useEffect(() => {
    console.log("Search Input Field Loaded");
  }, []);

  return (
    <div className="text-input-page">
      <h2>Search</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Search Bar</th>
          </tr>
        </thead>
        <tbody>
          {/* Default State */}
          <tr>
            <td>Default</td>
            <td><SearchBar placeholder="Search" /></td>
          </tr>
          {/* Focused State */}
          <tr>
            <td>Focused</td>
            <td><SearchBar label="Search" placeholder="Search" alwaysFocused={true} /></td>
          </tr>
          {/* Completed State */}
          <tr>
            <td>Completed</td>
            <td><SearchBar label="Search" placeholder="Search" alwaysShowLabel={true} /></td>
          </tr>
          {/* Disabled State */}
          <tr>
            <td>Disabled</td>
            <td><SearchBar label="Search" placeholder="Search" disabled={true} /></td>
          </tr>
          {/* Disabled Completed State */}
          <tr>
            <td>Disabled Completed</td>
            <td><SearchBar label="Search" placeholder="Search" disabled={true} defaultValue="Search text" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
