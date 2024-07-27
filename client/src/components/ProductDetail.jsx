import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container mt-4'>
      <h1>{product.name}</h1>
      <img src={product.image_url} alt={product.name} className='img-fluid' />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductDetail;
