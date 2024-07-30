import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          saudade art
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/work'>
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Let&apos;s Talk
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/faq'>
                FAQ
              </Link>
            </li>
          </ul>
          <div className='navbar-nav'>
            <li className='nav-item'>
              <button className='btn btn-primary' id="checkoutBtn" onClick={clearCart}>
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
