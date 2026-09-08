import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/cartSlice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const [added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isFavorite = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  const handleWishlist = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <>
      <div className="product-card">
        <button
          className="wishlist-button"
          onClick={handleWishlist}
          title={
            isFavorite
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <div className="product-image-wrap">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="product-category">
          {product.category}
        </div>

        <h3>{product.title}</h3>

        {product.rating && (
          <div className="product-rating">
            <span>★ {product.rating.rate}</span>
            <small>
              ({product.rating.count})
            </small>
          </div>
        )}

        <div className="product-price">
          ${product.price}
        </div>

        <div className="product-card-actions">
          <button
            className="details-button"
            onClick={() => setShowModal(true)}
          >
            View Details
          </button>

          <button
            onClick={handleAddToCart}
            className={
              added
                ? "add-cart-button added-button"
                : "add-cart-button"
            }
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="product-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="modal-close"
              onClick={() =>
                setShowModal(false)
              }
            >
              ×
            </button>

            <div className="modal-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="modal-info">
              <p className="modal-category">
                {product.category}
              </p>

              <h2>{product.title}</h2>

              <p className="modal-description">
                {product.description}
              </p>

              {product.rating && (
                <p className="modal-rating">
                  ⭐ {product.rating.rate} / 5
                  {" • "}
                  {product.rating.count} reviews
                </p>
              )}

              <h3 className="modal-price">
                ${product.price}
              </h3>

              <button
                onClick={handleAddToCart}
                className={
                  added
                    ? "added-button"
                    : ""
                }
              >
                {added
                  ? "Added ✓"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;