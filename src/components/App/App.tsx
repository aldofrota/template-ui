import React from "react";
import { ConfigProvider } from "antd";
import { themeConfig } from "@/styles/theme";
import ptBR from "antd/es/locale/pt_BR";
import { ThemeProvider } from "@/providers/ThemeProvider";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig} locale={ptBR}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
