import React from "react";

const CartItem = ({product, quantity}) => (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{product.name}</div>
        <div class="col-md-2">{product.priceInCents / 100}$</div>
        <div class="col-md-2">{quantity}</div>
      </div>
    </div>
  )

export default CartItem;
