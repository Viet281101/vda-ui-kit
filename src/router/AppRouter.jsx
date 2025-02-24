import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ButtonsPage from "../pages/ButtonsPage";
import CheckboxPage from "../pages/CheckboxPage";
import RadioButtonPage from "../pages/RadioButtonPage";
import SwitcherPage from "../pages/SwitcherPage";
import TextInputPage from "../pages/TextInputPage";
import PasswordPage from "../pages/PasswordPage";
import SearchPage from "../pages/SearchPage";
import DropdownPage from "../pages/DropdownPage";
import DatePickerPage from "../pages/DatePickerPage";
import TimePickerPage from "../pages/TimePickerPage";
import PhoneMaskPage from "../pages/PhoneMaskPage";
import TextAreaPage from "../pages/TextAreaPage";

const AppRouter = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#f4f4f4" }}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Buttons</NavLink>
        <NavLink to="/checkboxes" className={({ isActive }) => (isActive ? "active" : "")}>Checkboxes</NavLink>
        <NavLink to="/radio-buttons" className={({ isActive }) => (isActive ? "active" : "")}>Radio Buttons</NavLink>
        <NavLink to="/switchers" className={({ isActive }) => (isActive ? "active" : "")}>Switchers</NavLink>
        <NavLink to="/text-input" className={({ isActive }) => (isActive ? "active" : "")}>Text Input</NavLink>
        <NavLink to="/password" className={({ isActive }) => (isActive ? "active" : "")}>Password</NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>Search</NavLink>
        <NavLink to="/dropdown" className={({ isActive }) => (isActive ? "active" : "")}>Dropdown</NavLink>
        <NavLink to="/date-picker" className={({ isActive }) => (isActive ? "active" : "")}>Date Picker</NavLink>
        <NavLink to="/time-picker" className={({ isActive }) => (isActive ? "active" : "")}>Time Picker</NavLink>
        <NavLink to="/phone-mask" className={({ isActive }) => (isActive ? "active" : "")}>Phone Mask</NavLink>
        <NavLink to="/text-area" className={({ isActive }) => (isActive ? "active" : "")}>Text Area</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ButtonsPage />} />
        <Route path="/checkboxes" element={<CheckboxPage />} />
        <Route path="/radio-buttons" element={<RadioButtonPage />} />
        <Route path="/switchers" element={<SwitcherPage />} />
        <Route path="/text-input" element={<TextInputPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
        <Route path="/date-picker" element={<DatePickerPage />} />
        <Route path="/time-picker" element={<TimePickerPage />} />
        <Route path="/phone-mask" element={<PhoneMaskPage />} />
        <Route path="/text-area" element={<TextAreaPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
