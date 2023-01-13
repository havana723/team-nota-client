import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";

const LayoutContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding-top: 64px;
  overflow-y: auto;
`;

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return (
    <>
      <LayoutContainer>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
