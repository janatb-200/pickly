import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromWishlist,
  clearWishlist,
} from "../redux/wishlistSlice";

import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const dispatch = useDispatch();

  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your wishlist is empty</h2>

          <p>
            Save products you like by clicking the heart.
          </p>
        </div>
      ) : (
        <>
          <div className="wishlist-header">
            <p>
              {wishlistItems.length} saved{" "}
              {wishlistItems.length === 1
                ? "product"
                : "products"}
            </p>

            <button
              onClick={() =>
                dispatch(clearWishlist())
              }
            >
              Clear Wishlist
            </button>
          </div>

          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div
                className="wishlist-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

                <p>${item.price}</p>

                <div className="wishlist-actions">
                  <button
                    onClick={() =>
                      handleAddToCart(item)
                    }
                    className={
                      addedId === item.id
                        ? "added-button"
                        : ""
                    }
                  >
                    {addedId === item.id
                      ? "Added ✓"
                      : "Add to Cart"}
                  </button>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromWishlist(item.id)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Wishlist;