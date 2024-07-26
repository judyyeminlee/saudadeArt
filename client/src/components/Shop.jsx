import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
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
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='container mt-4'>
      <h1>Shop</h1>
      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col-md-4 mb-4'>
            <div className='card'>
              <img
                src={product.image_url}
                className='card-img-top'
                alt={product.name}
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>${product.price}</p>
                <button
                  className='btn btn-primary'
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className='btn btn-secondary ms-2'
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
