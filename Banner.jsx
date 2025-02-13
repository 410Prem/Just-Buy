import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <img
        src="images/Banner.png"
        alt="Big Sale Banner"
        className="banner-img"
      />
      <div className="banner-text">
        <h2>Big Sale Today!</h2>
        <p>Up to 50% off on Electronics and Fashion</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default Banner;
