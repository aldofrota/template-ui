import React from "react";
import { Layout as AntLayout } from "antd";
import { Menu } from "@/components";
const { Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Menu />
      <AntLayout style={{ flex: 1 }}>
        <Content style={{ display: "flex" }}>{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
