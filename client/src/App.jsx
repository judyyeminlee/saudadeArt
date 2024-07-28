import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [products] = useState([
    {
      name: "custom pet portrait",
      price: 29.99,
      image_url: "/ImagesVideos/Mock Painting.jpeg",
    },
    {
      name: "custom canvas tote",
      price: 99.99,
      image_url: "/ImagesVideos/beigeTote.jpg",
    },
    {
      name: "custom canvas pouch",
      price: 15.99,
      image_url: "/ImagesVideos/Mock Painting2.jpeg",
    },
  ]);

  useEffect(() => {
    // Uncomment the axios call when the database is ready
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <CartProvider>
      <Router>
        <Header />
        {/* <div className="navBarLine">
          <nav id="navBar" className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              saudade art
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/work">
                    work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    let&apos;s talk
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div> */}
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/product/:id"
              element={<ProductDetail products={products} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
