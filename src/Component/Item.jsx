import React from "react";

function Item({ product, key }) {
  return (
    <div className="product-1">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="content-product">
        <h4>{product.name}</h4>
        <span>{product.description}</span>
        <h2>{product.price}$</h2>
        <div className="button-addtocart">
          <div className="buttons_added">
            <button className="minus is-form" type="button" value="-">
              -
            </button>
            <p aria-label="quantity" className="input-qty" name="" value={1}>
              1
            </p>
            <button className="plus is-form" type="button" value="+">
              +
            </button>
          </div>
          <div className="add-to-cart">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
