import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-md navbar-dark px-sm-5">
      <Link to="/">
        <i className="fas fa-phone navbar-brand" id="phone"></i>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto" id="cart">
        <ButtonContainer className="float-md-right">
          my cart <i className="fas fa-cart-plus"></i>
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  background-color: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1, 3rem;
    text-transform: capitalize !important;
  }
`;
