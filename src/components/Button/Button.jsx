// Import necessary styles for the Button component
import "./button.scss";

// Functional component representing a button in the application
const Button = ({ action, handler }) => {
  return (
    // Button element with a base styling class and an onClick event handler
    <button className="base-button" onClick={handler}>
      {/* Display the action text provided as a prop */}
      {action}{" "}
    </button>
  );
};

// Export the Button component for use in other parts of the application
export default Button;
