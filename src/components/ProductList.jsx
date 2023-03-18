import React from "react";
import Product from "./Product";

function ProductList({ products, selectedProducts, onAdd, onRemove }) {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <Product
          key={product.id}
          selected={selectedProducts[product.id] ?? 0}
          onAdd={onAdd}
          onRemove={onRemove}
          {...product}
        />
      ))}
    </div>
  );
}

export default ProductList;
