import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductContext from "../store/context";

const Product = ({ product }) => {
  const context = useContext(ProductContext);
  const { id, title, img, price, inCart } = product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => context.showDetails(id)}
        >
          <Link to="/details">
            <img
              src={img}
              alt="product"
              className="card-image-top"
              width="100%"
              height="100%"
            />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              context.openModal(id);
              context.addToCart(id);
            }}
          >
            {inCart ? (
              <p className="mb-0 text-capitalize" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transititon: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transititon: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background-color: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-image-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-image-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
