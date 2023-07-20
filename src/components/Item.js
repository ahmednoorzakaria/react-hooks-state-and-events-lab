import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCartToggle() {
    setInCart((prevInCart) => !prevInCart);
  }

  const className = inCart ? "in-cart" : "";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

