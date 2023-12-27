// Import necessary components, styles, and data for the RightSidebar
import React from "react";
import { Link } from "react-router-dom";
import orders from "../../data/orders";
import OrderInfo from "../OrderInfo/OrderInfo";
import "./rightSidebar.scss";

// Functional component representing the RightSidebar section of the application
const RightSidebar = () => {
  return (
    // Container for the RightSidebar component with defined styles
    <div className="right-sidebar">
      {/* Section displaying the list of current orders */}
      <div>
        {/* Header and action section for current orders */}
        <div className="actions">
          <h2>Current Orders</h2>
          {/* Link to navigate to the main page */}
          <Link to={"/"}>
            <h2 className="show-more-mobile">Show More</h2>
          </Link>
        </div>

        {/* List of individual OrderInfo components, each representing an order */}
        <div className="orders">
          {orders.map((order) => (
            <OrderInfo orderData={order} key={order.id} />
          ))}
        </div>
      </div>

      {/* Link to navigate to the main page, providing an option to show more orders */}
      <Link to={"/"}>
        <h2 className="show-more">Show More</h2>
      </Link>
    </div>
  );
};

// Export the RightSidebar component for use in other parts of the application
export default RightSidebar;
