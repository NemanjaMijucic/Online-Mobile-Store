import React, { useContext } from "react";
import ProductContext from "../store/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Details = () => {
  const context = useContext(ProductContext);
  const { id, company, img, info, price, title, inCart } =
    context.productDetail;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>

      {/* product info */}
      <div className="row">
        {/* product image */}
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product
          </p>
          <p className="text-muted lead">{info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                context.addToCart(id);
                context.openModal(id);
              }}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
