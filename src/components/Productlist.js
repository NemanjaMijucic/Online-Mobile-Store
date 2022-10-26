import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import ProductContext from "../store/context";

const Productlist = () => {
  const context = useContext(ProductContext);
  const { storeProducts } = context;

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products"></Title>
          <div className="row">
            {storeProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Productlist;
