import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 1.5rem;
`;

const Navbar = () => {
  return <MainDiv>Search Github Users</MainDiv>;
};

export default Navbar;
