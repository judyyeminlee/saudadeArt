import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Shop = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>shop</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img
                src={product.image_url}
                className="productImages"
                alt={product.name}
              />
              <div className="cardBody">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <div className="d-flex flex-row justify-content-start">
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary me-2"
                  >
                    View Details
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
