import React from "react";

const CartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
      {props.copyright} {props.year}
      </a>
    </nav>
  );
};

export default CartFooter;
