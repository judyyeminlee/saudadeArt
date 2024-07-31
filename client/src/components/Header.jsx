import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <nav className="topNavBar navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="topNavBarName">saudade art</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="topNavBar nav-link" to="/">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topNavBar nav-link" to="/about">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topNavBar nav-link" to="/work">
                work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topNavBar nav-link" to="/shop">
                shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topNavBar nav-link" to="/contact">
                let&apos;s talk
              </Link>
            </li>
            <li className="nav-item">
              <Link className="topNavBar nav-link" to="/faq">
                faq
              </Link>
            </li>
          </ul>
          <div className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-primary"
                id="checkoutBtn"
                onClick={clearCart}
              >
                Checkout ({cart.length})
              </button>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
