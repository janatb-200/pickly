import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>
            Your cart is empty
          </h2>

          <p>
            Add some products and they will appear here.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p>
              {totalItems}{" "}
              {totalItems === 1 ? "item" : "items"}
            </p>

            <button
              onClick={() =>
                dispatch(clearCart())
              }
            >
              Clear Cart
            </button>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-item-info">
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    ${item.price}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className="item-total">
                    Item total: $
                    {(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>
              Total
            </span>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;