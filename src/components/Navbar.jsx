import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";

import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <Link to="/home" className="logo">
        Pickly
      </Link>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/wishlist" className="wishlist-link">
          Wishlist

          {wishlistItems.length > 0 && (
            <span className="wishlist-count">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        <Link to="/cart" className="cart-link">
          Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/orders">
              My Orders
            </Link>

            <Link to="/profile">
              My Profile
            </Link>
          </>
        )}

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>
        ) : (
          <Link to="/">Login</Link>
        )}

        <button
          onClick={toggleTheme}
          className="theme-button"
        >
          {darkMode ? "☀ Light" : "☾ Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;