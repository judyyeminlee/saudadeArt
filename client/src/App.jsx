// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Work from "./components/Work";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
// import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([
    // {
    //   name: "custom pet portrait",
    //   price: 29.99,
    //   // img_url:
    //     // "/ImagesVideos/Mock Painting.jpeg",
    // },
    // {
    //   name: "custom canvas tote",
    //   price: 99.99,
    //   // img_url: "/ImagesVideos/Beige Tote.jpg",
    // },
    // {
    //   name: "custom canvas pouch",
    //   price: 15.99,
    //   //img_url: "https://example.com/images/mug.jpg",
    // },
  ]);

  useEffect(() => {
    // Uncomment the axios call when the database is ready
    /*
    axios
      .get('http://localhost:5000/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('There was an error!', error));
    */
  }, []);

  return (
    <Router>
      <div className="navBarLine">
        {/* <Header/ > */}
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
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
