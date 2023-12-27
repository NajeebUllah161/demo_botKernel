// Import necessary modules and styles for the Range component
import React from "react";
import "./range.scss";

// Functional component representing a range input
const Range = ({ min, max, step, onChange }) => {
  return (
    // Input element with type "range" to capture a numeric value within a specified range
    <input
      min={min} // Minimum value allowed for the range
      max={max} // Maximum value allowed for the range
      step={step} // Increment/decrement value when adjusting the range
      type="range" // Input type set to "range"
      onChange={onChange} // Event handler for changes in the range value
    />
  );
};

// Export the Range component for use in other parts of the application
export default Range;
