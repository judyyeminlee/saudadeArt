import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
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
      id: 1,
      name: "Handcrafted Necklace",
      price: 29.99,
      image_url: "https://example.com/image1.jpg",
      description: "A beautiful handcrafted necklace.",
    },
    {
      id: 2,
      name: "Artistic Painting",
      price: 99.99,
      image_url: "https://example.com/image2.jpg",
      description: "An artistic painting to beautify your home.",
    },
    {
      id: 3,
      name: "Custom Mug",
      price: 15.99,
      image_url: "https://example.com/image3.jpg",
      description: "A custom mug with personalized design.",
    },
  ]);

  useEffect(() => {
    // Uncomment the axios call when the database is ready
    /*
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error!', error));
    */
  }, []);

  return (
    <CartProvider>
      <Router>
        <Header />
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/shop' element={<Shop products={products} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<FAQ />} />
            <Route
              path='/product/:id'
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
