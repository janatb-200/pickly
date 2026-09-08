import { useLocation, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const orderNumber =
    location.state?.orderNumber || "PICKLY-0000";

  const total =
    location.state?.total || "0.00";

  return (
    <div className="order-success-page">
      <div className="order-success-box">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with Pickly.
        </p>

        <div className="order-details">
          <p>
            <strong>Order Number:</strong>{" "}
            {orderNumber}
          </p>

          <p>
            <strong>Total:</strong> ${total}
          </p>
        </div>

        <button
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;