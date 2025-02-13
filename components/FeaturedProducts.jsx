import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h3>Featured Products</h3>
      <div className="product-grid">
        <ProductCard
          image="images/Smartphone_Product_Image.png"
          name="Smartphone"
          price="25999"
        />
        <ProductCard
          image="images/Laptop_Product_Image.png"
          name="Laptop"
          price="55499"
        />
        <ProductCard
          image="images/Headphones_Product_Image.png"
          name="Headphones"
          price="2499"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
