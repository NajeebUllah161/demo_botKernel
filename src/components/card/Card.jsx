// Import necessary modules and styles for the Card component
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Range from "../Range/Range";
import one from "../../assets/one.webp";
import "./card.scss";

// Functional component representing a card in the application
const Card = ({ itemData }) => {
  return (
    // Container for the card with dynamic background styling
    <div
      className="card"
      style={{
        background: `linear-gradient(0deg, rgba(32, 38, 44, 0.90) 0%, rgba(32, 38, 44, 0.90) 100%), url(${one}), lightgray 50% / cover no-repeat`,
      }}
    >
      {/* Title of the card */}
      <h2>{itemData.title}</h2>

      {/* Description of the card */}
      <p className="desc">{itemData.desc}</p>

      {/* Section for filters, including a Button and a Range component */}
      <div className="filters">
        {/* Button for search settings */}
        <Button
          action="Search Settings"
          handler={(e) => console.log("address clicked")}
        />

        {/* Range component for adjusting a numeric value within a specified range */}
        <div className="range">
          <Range
            min={0}
            max={100}
            step={10}
            value={20}
            onChange={(e) => console.log("changing")}
          />
          <span>100KM</span>
        </div>
      </div>

      {/* Bottom section of the card */}
      <div className="bottom">
        {/* Left section containing filter options */}
        <div className="left">
          <h3>Filter</h3>

          {/* Links for filter options */}
          <div className="links">
            <Link to={"/"}>Nearby</Link>
            <Link to={"/"}>Alphabetical</Link>
            <Link to={"/"}>Cash Back</Link>
          </div>
        </div>

        {/* Right section containing a Button to shop now */}
        <div className="right">
          <Button
            action="SHOP NOW"
            handler={(e) => console.log("address clicked")}
          />
        </div>
      </div>
    </div>
  );
};

// Export the Card component for use in other parts of the application
export default Card;
