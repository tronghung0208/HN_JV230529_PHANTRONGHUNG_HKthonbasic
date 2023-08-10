import React from "react";
import Item from "./Item";

function ProductItem({ products }) {
  return (
    <section className="box-3">
      <div className="container">
        <div className="product-hunt">
          {products.map((item, index) => (
            <Item key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductItem;
