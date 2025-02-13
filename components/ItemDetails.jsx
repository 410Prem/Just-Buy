import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Item Details for Item {id}</h1>
      {/* Add item details here */}
    </div>
  );
}

export default ItemDetails;
