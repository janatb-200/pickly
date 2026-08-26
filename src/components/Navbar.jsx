import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav>
      <Link to="/home" className="logo">
        Pickly
      </Link>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart" className="cart-link">
          Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/">Login</Link>

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