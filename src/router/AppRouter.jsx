import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
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

const NavbarContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  background: #2c3e50;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 10px 0;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #7f8c8d;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover {
    cursor: grab;
  }
`;

const Navbar = styled.nav`
  display: flex;
  gap: 15px;
  padding: 10px 20px;
`;

const NavItem = styled(NavLink)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #34495e;
    color: #ffffff;
  }

  &.active {
    background: #e74c3c;
    color: #fff;
    font-weight: bold;
  }
`;

const AppRouter = () => {
  return (
    <Router>
      <NavbarContainer>
        <Navbar>
          <NavItem to="/">Buttons</NavItem>
          <NavItem to="/checkboxes">Checkboxes</NavItem>
          <NavItem to="/radio-buttons">Radio Buttons</NavItem>
          <NavItem to="/switchers">Switchers</NavItem>
          <NavItem to="/text-input">Text Input</NavItem>
          <NavItem to="/password">Password</NavItem>
          <NavItem to="/search">Search</NavItem>
          <NavItem to="/dropdown">Dropdown</NavItem>
          <NavItem to="/date-picker">Date Picker</NavItem>
          <NavItem to="/time-picker">Time Picker</NavItem>
          <NavItem to="/phone-mask">Phone Mask</NavItem>
          <NavItem to="/text-area">Text Area</NavItem>
        </Navbar>
      </NavbarContainer>

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
