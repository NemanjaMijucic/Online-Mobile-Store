import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import ProductContext from "./store/context";

function App() {
  const context = useContext(ProductContext);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Productlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Default />} />
      </Routes>
      {context.modalOpen && <Modal />}
    </React.Fragment>
  );
}

export default App;
