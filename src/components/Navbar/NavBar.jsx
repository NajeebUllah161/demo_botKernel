// Import necessary styles, logo, and icon for the NavBar component
import React from "react";
import { FaAlignJustify } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import "./navBar.scss";

// Functional component representing the navigation bar of the application
const NavBar = ({ showMenu, isMobile }) => {
  return (
    // Container for the navigation bar with defined styles
    <div className="navbar">
      {/* Inner container for the logo and menu icon */}
      <div className="inner">
        {/* Application logo displayed in the navigation bar */}
        <img src={logo} />

        {/* Menu icon displayed for mobile view with click event handler */}
        {isMobile ? (
          <FaAlignJustify className="menu-icon" size={25} onClick={showMenu} />
        ) : (
          "" // Empty string for non-mobile view
        )}
      </div>
    </div>
  );
};

// Export the NavBar component for use in other parts of the application
export default NavBar;
