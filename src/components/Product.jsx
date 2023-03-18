import React from "react";

function Product({ id, selected, name, price, onAdd, onRemove }) {
  return (
    <div className="product-container">
      <h3>Product: {name}</h3>
      <h5>Price: ${price}</h5>
      {!!selected && (
        <button onClick={() => onRemove(id)}>Remove from Cart</button>
      )}
      <button onClick={() => onAdd(id)}>
        Add to Cart {selected ? `(${selected})` : ""}
      </button>
    </div>
  );
}

export default Product;
