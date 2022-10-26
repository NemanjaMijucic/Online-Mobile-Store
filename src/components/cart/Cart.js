import React, { useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import ProductContext from "../../store/context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const context = useContext(ProductContext);
  const { cartProducts } = context;

  return (
    <section>
      <Title name="your" title="cart" />
      <CartColumns />
      <CartList cart={cartProducts} />
      {cartProducts.length !== 0 && <CartTotals />}
      {cartProducts.length === 0 && <EmptyCart />}
    </section>
  );
};

export default Cart;
