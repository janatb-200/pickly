import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <span className="hero-label">
            Simple shopping, better picks
          </span>

          <h1>
            Find something you’ll love.
          </h1>

          <p>
            Explore clothing, electronics,
            jewelry and more in one simple place.
          </p>

          <div className="hero-buttons">
            <Link
              to="/products"
              className="primary-btn"
            >
              Shop Now
            </Link>

            <Link
              to="/cart"
              className="secondary-btn"
            >
              View Cart
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-icon">
            🛍️
          </div>

          <h2>Pickly</h2>

          <p>
            Pick what you like.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span>🔎</span>

          <h3>Easy Search</h3>

          <p>
            Quickly search and filter products.
          </p>
        </div>

        <div className="feature-card">
          <span>🛒</span>

          <h3>Smart Cart</h3>

          <p>
            Change quantities and see totals instantly.
          </p>
        </div>

        <div className="feature-card">
          <span>📱</span>

          <h3>Responsive</h3>

          <p>
            Pickly works on desktop,
            tablet and mobile.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;