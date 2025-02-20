import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ButtonsPage from "../pages/ButtonsPage";
import CheckboxPage from "../pages/CheckboxPage";
import RadioButtonPage from "../pages/RadioButtonPage";
import SwitcherPage from "../pages/SwitcherPage";

const AppRouter = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#f4f4f4" }}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Buttons</NavLink>
        <NavLink to="/checkboxes" className={({ isActive }) => (isActive ? "active" : "")}>Checkboxes</NavLink>
        <NavLink to="/radio-buttons" className={({ isActive }) => (isActive ? "active" : "")}>Radio Buttons</NavLink>
        <NavLink to="/switchers" className={({ isActive }) => (isActive ? "active" : "")}>Switchers</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ButtonsPage />} />
        <Route path="/checkboxes" element={<CheckboxPage />} />
        <Route path="/radio-buttons" element={<RadioButtonPage />} />
        <Route path="/switchers" element={<SwitcherPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
