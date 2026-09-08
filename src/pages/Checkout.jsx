import { useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.phone
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const orderNumber =
      "PICKLY-" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    const orderTotal = totalPrice.toFixed(2);

    const newOrder = {
      id: Date.now(),
      orderNumber,
      date: new Date().toLocaleString(),
      customer: formData,
      items: cartItems,
      total: orderTotal,
    };

    const savedOrders =
      JSON.parse(
        localStorage.getItem("picklyOrders")
      ) || [];

    const updatedOrders = [
      newOrder,
      ...savedOrders,
    ];

    localStorage.setItem(
      "picklyOrders",
      JSON.stringify(updatedOrders)
    );

    dispatch(clearCart());

    navigate("/order-success", {
      state: {
        orderNumber,
        total: orderTotal,
      },
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            Add products before going to checkout.
          </p>

          <button
            className="checkout-empty-button"
            onClick={() =>
              navigate("/products")
            }
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-heading">
        <span>Secure Checkout</span>

        <h1>Complete your order</h1>

        <p>
          Enter your shipping information and review
          your order before placing it.
        </p>
      </div>

      <div className="checkout-container">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <div className="checkout-section-title">
            <div className="checkout-step">
              1
            </div>

            <div>
              <h2>Shipping Information</h2>

              <p>
                Where should we send your order?
              </p>
            </div>
          </div>

          <div className="checkout-fields">
            <div className="checkout-field full-field">
              <label htmlFor="fullName">
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="checkout-field">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </div>

            <div className="checkout-field">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+961 ..."
              />
            </div>

            <div className="checkout-field full-field">
              <label htmlFor="address">
                Address
              </label>

              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street, building, area..."
              />
            </div>

            <div className="checkout-field full-field">
              <label htmlFor="city">
                City
              </label>

              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>
          </div>

          {error && (
            <div className="checkout-error">
              {error}
            </div>
          )}

          <div className="checkout-security-note">
            <span>🔒</span>

            <p>
              Your information is protected and
              securely handled.
            </p>
          </div>

          <button
            type="submit"
            className="place-order-button"
          >
            Place Order
            <span>→</span>
          </button>
        </form>

        <aside className="order-summary">
          <div className="summary-heading">
            <div>
              <span>Order Summary</span>

              <h2>Your Cart</h2>
            </div>

            <div className="summary-item-count">
              {totalItems}
            </div>
          </div>

          <div className="summary-products">
            {cartItems.map((item) => (
              <div
                className="summary-product"
                key={item.id}
              >
                <div className="summary-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <span>
                    {item.quantity}
                  </span>
                </div>

                <div className="summary-product-info">
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    ${item.price} each
                  </p>
                </div>

                <strong>
                  $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </strong>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-row">
            <span>Subtotal</span>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <strong className="free-shipping">
              Free
            </strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-final-total">
            <div>
              <span>Total</span>

              <small>USD</small>
            </div>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <div className="summary-benefits">
            <div>
              <span>✓</span>
              Secure checkout
            </div>

            <div>
              <span>✓</span>
              Free shipping
            </div>

            <div>
              <span>✓</span>
              Easy order tracking
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;