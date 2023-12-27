// Import necessary styles for the OrderInfo component
import "./orderInfo.scss";

// Functional component representing an order information display
const OrderInfo = ({ orderData }) => {
  return (
    // Container for order information with dynamic styling
    <div className={`order-info`}>
      {/* Arrow indicating order information */}
      <div className="arrow">--</div>

      {/* Section containing detailed order information */}
      <div className="info">
        {/* Display the order number */}
        <p className="order-number">{orderData.id}</p>

        {/* Display the store name associated with the order */}
        <p className="store-name">{orderData.store}</p>

        {/* Display the status of the order */}
        <p className="status">{orderData.status}</p>
      </div>
    </div>
  );
};

// Export the OrderInfo component for use in other parts of the application
export default OrderInfo;
