import React from "react";
import { Layout as AntLayout } from "antd";
const { Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <AntLayout>
        <Content>{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
