import React, { Component } from "react";

class CartForm extends Component {
  state = {
/*       currentQuantity: 0,
      currentProduct: null, */
  };

/*   updateQuantity = (e) => {
      e.preventDefault();
      this.setState({currentQuantity: e.target.value});
      console.log(this.state.currentQuantity)
  }
  updateProduct = (e) => {
      e.preventDefault();
      this.setState({currentProduct: e.target.value});
      console.log(e.target.value);
      //console.log(this.state.currentProduct)
  } */
  
  onChange = (e) => this.setState({[e.target.name]: e.target.value})
  onSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.id, this.state.quantity)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}> 
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input onChange={this.onChange} type="text" className="form-control" name="quantity" />
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            placeholder="Select an option..."
            onChange={this.onChange}
            name="id"
          >
            {this.props.products.map((item) => (
              <option value={item.id}>{item.name} </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CartForm;
