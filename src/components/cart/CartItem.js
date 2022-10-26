import React, { useContext } from "react";
import ProductContext from "../../store/context";

const CartItem = ({ item }) => {
  const context = useContext(ProductContext);

  const { id, title, img, price, total, count } = item;
  return (
    <div className="row my-2 text-capitalize text-center" key={id}>
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "6rem", height: "6rem" }}
          alt="product"
          className="image-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="">
            <span
              className="btn btn-black mx-1"
              onClick={() => context.decrement(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => context.increment(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div>
          <i
            className="fas fa-trash"
            onClick={() => context.removeItem(id)}
          ></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total: $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
