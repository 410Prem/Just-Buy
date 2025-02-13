import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/products";

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/products/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
