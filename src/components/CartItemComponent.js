import React, { Component } from "react";
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import { itemList } from "./itemList";

class CartItemComponent extends Component {
  state = {
    itemList: [
      {
        id: 1,
        product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        quantity: 1,
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499,
        },
        quantity: 2,
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999,
        },
        quantity: 1,
      },
    ],
    products: [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 },
    ],
  };

  calculateTotal = () => {
    let totalPrice = 0;
    this.state.itemList.forEach(
      item => {totalPrice += item.product.priceInCents * item.quantity}
    )
    return totalPrice / 100;
  }


  addItemsToItemsList = (id, quantity) => {
    /*     this.state.products.forEach((product) => {
      if (product.id == id) {
    //     this.state.itemList.push({
    //      id: this.state.itemList.length + 1,
    //      product,
    //      quantity: Number(quantity),
    //    });
    //    this.forceUpdate(); 
        this.setState({
          itemList: [
            ...this.state.itemList,
            {
              id: this.state.itemList.length + 1,
              product,
              quantity: Number(quantity),
            },
          ],
        });
      }
    });
  }; */
    var isItemInCartList = false;

    for (var i = 0; i < this.state.itemList.length; i++) {
      if (this.state.itemList[i].product.id == id) {
        var temp = this.state;
        temp.itemList[i].quantity += Number(quantity);
        this.setState(temp);
        isItemInCartList = true;
      }
    }
    if (!isItemInCartList) {
      this.state.products.forEach((product) => {
        if (product.id == id) {
          this.setState({
            itemList: [
              ...this.state.itemList,
              {
                id: this.state.itemList.length + 1,
                product,
                quantity: Number(quantity),
              },
            ],
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {this.state.itemList.map((item) => (
            <CartItem
              key={item.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div>
          Total Price: {this.calculateTotal()}$
        </div>
        <CartForm
          products={this.state.products}
          addItem={this.addItemsToItemsList}
        />
      </div>
    );
  }
}

export default CartItemComponent;
