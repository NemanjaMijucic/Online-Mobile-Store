import React, { useState } from "react";
import { storeProducts } from "../data";

const ProductContext = React.createContext({
  storeProducts: [],
  productdetail: {},
  cartProducts: [],
  modalProduct: {},
  modalOpen: "",
  cartTotal: "",
  addToCart: () => {},
  showDetails: () => {},
  openModal: () => {},
  closeModal: () => {},
  increment: () => {},
  decrement: () => {},
  removeItem: () => {},
  clearCart: () => {},
  addTotal: () => {},
});

let total = 0;
export const ProductContextProvider = (props) => {
  const [productDetail, setProductDetail] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState();

  //finding item in the storeProducts array
  const getItem = (id) => {
    const product = storeProducts.find((item) => item.id === id);
    return product;
  };

  //function for adding product to cart
  let productsInCart = [];
  const addToCart = (id) => {
    const tempProducts = [...storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price * product.count;
    productsInCart.push(product);
    setCartProducts((prev) => [...prev, ...productsInCart]);
    productsInCart.map((item) => {
      return (total += item.total);
    });
    setCartTotal(() => total);
  };

  //   function for opening modal
  const openModal = (id) => {
    setModalOpen(true);
    setModalProduct((prev) => (prev = getItem(id)));
  };

  //function for closing modal
  const closeModal = () => setModalOpen(false);

  //function for showing details about product
  const showDetails = (id) => {
    const product = storeProducts.find((item) => item.id === id);
    setProductDetail(product);
  };

  //functios for cart

  const removeItem = (id) => {
    const tempProducts = [...storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    const price = removedProduct.price;
    removedProduct.total = price * removedProduct.count;
    let newcartProducts = cartProducts.filter(
      (item) => item.id !== removedProduct.id
    );
    total = newcartProducts
      .map((item) => item.total)
      .reduce((acc, currvalues) => {
        return acc + currvalues;
      }, 0);
    setCartProducts(() => newcartProducts);
    setCartTotal(() => total);
  };

  const increment = (id) => {
    let tempCart = [...cartProducts];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count++;
    product.total = product.price * product.count;
    total = tempCart
      .map((item) => item.total)
      .reduce((acc, currvalues) => {
        return acc + currvalues;
      }, 0);
    // setCartProducts(() => [...tempCart]);
    setCartTotal(() => total);
  };

  const decrement = (id) => {
    let tempCart = [...cartProducts];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;
    if (product.count === 0) {
      removeItem(id);
    }
    product.total = product.price * product.count;
    total = tempCart
      .map((item) => item.total)
      .reduce((acc, currvalues) => {
        return acc + currvalues;
      }, 0);
    setCartTotal(() => total);
  };

  const clearCart = () => {
    setCartProducts([]);
    setCartTotal(0);
  };

  return (
    <ProductContext.Provider
      value={{
        storeProducts: storeProducts,
        productDetail: productDetail,
        cartProducts: cartProducts,
        modalOpen: modalOpen,
        modalProduct: modalProduct,
        cartTotal: cartTotal,
        addToCart: addToCart,
        showDetails: showDetails,
        openModal: openModal,
        closeModal: closeModal,
        increment: increment,
        decrement: decrement,
        removeItem: removeItem,
        clearCart: clearCart,
        // addTotal: addTotal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
