import React from "react";
import styled from "styled-components";
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <StLayout>
      <Nav />
      <Header />
      {children}
      <Footer />
    </StLayout>
    );
};

export default Layout;

const StLayout = styled.div`
  max-width: 1000px;
  min-width: 800px;
  margin: 0 auto;
  box-shadow: 0 8px 32px 0 rgba(155, 152, 152, 0.37);
`;