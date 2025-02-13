import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const Products = ({ addToCart }) => {
  const { categoryId } = useParams();

  const filteredProducts = products.filter(
    (product) => product.categoryId === parseInt(categoryId)
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
