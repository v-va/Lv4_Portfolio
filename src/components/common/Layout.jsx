import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  max-width: 1000px;
  min-width: 800px;
  margin: 0 auto;
  box-shadow: 0 8px 32px 0 rgba(155, 152, 152, 0.37);
`;