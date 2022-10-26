import React, { useContext } from "react";
import ProductContext from "../../store/context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const context = useContext(ProductContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => context.clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                total: $ <strong>{context.cartTotal}</strong>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
