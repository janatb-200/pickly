import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <span className="hero-label">
            Smarter shopping starts here
          </span>

          <h1>
            Discover products you’ll actually love.
          </h1>

          <p>
            Browse fashion, electronics, jewelry and more
            in one clean and simple shopping experience.
          </p>

          <div className="hero-buttons">
            <Link
              to="/products"
              className="primary-btn"
            >
              Shop Products
            </Link>

            <Link
              to="/wishlist"
              className="secondary-btn"
            >
              View Wishlist
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Shopping</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-main-card">
            <div className="shopping-icon">
              🛍️
            </div>

            <h2>Pickly</h2>

            <p>
              Pick what you like.
            </p>
          </div>

          <div className="floating-card floating-one">
            ❤️ Wishlist
          </div>

          <div className="floating-card floating-two">
            🛒 Smart Cart
          </div>

          <div className="floating-card floating-three">
            ⭐ Top Picks
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="home-feature-card">
          <div className="feature-icon">
            🔎
          </div>

          <h3>Quick Discovery</h3>

          <p>
            Search, filter and sort products to find
            exactly what you need.
          </p>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon">
            ❤️
          </div>

          <h3>Save Favorites</h3>

          <p>
            Keep your favorite products in your wishlist
            and come back to them anytime.
          </p>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon">
            🛒
          </div>

          <h3>Easy Checkout</h3>

          <p>
            Manage quantities, review totals and place
            your order in a few simple steps.
          </p>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span className="cta-label">
            Ready to browse?
          </span>

          <h2>
            Find your next favorite product.
          </h2>

          <p>
            Explore Pickly’s product collection and start
            building your cart.
          </p>
        </div>

        <Link
          to="/products"
          className="primary-btn"
        >
          Start Shopping
        </Link>
      </section>
    </div>
  );
}

export default Home;