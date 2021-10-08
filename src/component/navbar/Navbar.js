import React from "react";
import logo from "../../images/logo.png";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <Wrapper className="container">
      <nav className="navbar">
        <img src={logo} alt="logo" />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #444152;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 7rem;
  }
  nav {
    padding: 5px;
  }
`;

export default Navbar;
