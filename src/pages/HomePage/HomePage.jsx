// Import necessary modules and styles
import React from "react";
import "./homePage.scss";
import { useState, useEffect } from "react";

// Importing custom components and data
import NavBar from "../../components/Navbar/NavBar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Card from "../../components/card/Card";
import items from "../../data/items";

// Functional component for the HomePage
const HomePage = () => {
  // State variables for handling mobile view and menu visibility
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Mobile breakpoint value
  const MOBILE_BREAKPOINT = 800;

  // Effect to handle window resize and update mobile view state
  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Render the HomePage component
  return (
    <div className="container">
      {/* Navbar component */}
      <NavBar isMobile={isMobile} showMenu={() => setIsMenuVisible(true)} />

      <div className="content-area">
        {/* LeftSidebar component - Mobile or Desktop version based on isMobile state */}
        {isMobile ? (
          <LeftSidebar
            isMobile={true}
            isVisible={isMenuVisible}
            onClose={() => setIsMenuVisible(false)}
          />
        ) : (
          <LeftSidebar isMobile={false} />
        )}

        <div className="content-body">
          {/* Dashboard title */}
          <h2 className="dashboard-title">Dashboard</h2>

          {/* List of items displayed as cards */}
          <div className="items">
            {items.map((item) => (
              <Card itemData={item} key={item.id} />
            ))}
          </div>
        </div>

        {/* RightSidebar component */}
        <RightSidebar />
      </div>
    </div>
  );
};

// Export the HomePage component
export default HomePage;
