import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ButtonsPage from "../pages/ButtonsPage";
import CheckboxPage from "../pages/CheckboxPage";
import RadioButtonPage from "../pages/RadioButtonPage";
import SwitcherPage from "../pages/SwitcherPage";
import TextInputPage from "../pages/TextInputPage";

const AppRouter = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#f4f4f4" }}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Buttons</NavLink>
        <NavLink to="/checkboxes" className={({ isActive }) => (isActive ? "active" : "")}>Checkboxes</NavLink>
        <NavLink to="/radio-buttons" className={({ isActive }) => (isActive ? "active" : "")}>Radio Buttons</NavLink>
        <NavLink to="/switchers" className={({ isActive }) => (isActive ? "active" : "")}>Switchers</NavLink>
        <NavLink to="/text-input" className={({ isActive }) => (isActive ? "active" : "")}>Text Input</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ButtonsPage />} />
        <Route path="/checkboxes" element={<CheckboxPage />} />
        <Route path="/radio-buttons" element={<RadioButtonPage />} />
        <Route path="/switchers" element={<SwitcherPage />} />
        <Route path="/text-input" element={<TextInputPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
