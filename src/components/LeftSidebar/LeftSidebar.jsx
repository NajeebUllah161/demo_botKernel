// Import necessary components and styles for the LeftSidebar
import React from "react";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import "./leftSidebar.scss";
// Importing React Router's Link for navigation
import { Link } from "react-router-dom";

// Functional component representing the left sidebar of the application
const LeftSidebar = ({ isMobile = false, isVisible = true, onClose }) => {
  console.log(isVisible);

  // Render the LeftSidebar component
  return (
    // Container for the left sidebar with dynamic styles based on mobile and visibility
    <div
      className={isMobile ? "mobile-sidebar " : ""}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      {/* Main content of the left sidebar */}
      <div className={`left-sidebar`}>
        <div>
          {/* Close button for mobile view */}
          {isMobile ? (
            <div className="top">
              <img src={logo} />/{" "}
              <button onClick={onClose} className="close">
                X
              </button>
            </div>
          ) : (
            "" // Empty string for non-mobile view
          )}

          {/* Greetings and user balance section */}
          <div className="greetings">
            <span className="first">
              <p>Welcome Back</p>
              <b>Hanna</b>
            </span>
            <span className="second">
              <p>BALANCE</p>
              <b>$79</b>
            </span>
          </div>

          {/* User address section */}
          <div className="address">
            <p className="address-title">ADDRESS</p>

            {/* Button component for displaying user address */}
            <Button
              action="12 ABC ST"
              handler={(e) => console.log("address clicked")}
            />

            {/* Option to add a new address */}
            <p className="add-address"> + ADD ADDRESS</p>
          </div>
        </div>

        {/* More options section for additional user actions */}
        <div className="more-options">
          <p className="more-heading">MORE OPTIONS</p>

          {/* React Router Links for navigation to different sections */}
          <Link to={"/"}>Profile Settings</Link>
          <Link to={"/"}>My Orders</Link>
          <Link to={"/"}>Earnings</Link>
          <Link to={"/"}>FAQ</Link>
          <Link to={"/"}>Partner Program</Link>
          <Link to={"/"}>Contact Us</Link>
          <Link to={"/"}>Log Out</Link>
        </div>
      </div>
    </div>
  );
};

// Export the LeftSidebar component for use in other parts of the application
export default LeftSidebar;
