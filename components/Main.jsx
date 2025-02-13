import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import Products from "./Products";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Shipment from "./Shipment";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/products/:categoryId"
            element={<Products addToCart={addToCart} />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shipment" element={<Shipment />} />
        </Routes>
        <FeaturedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
