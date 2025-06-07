import React, { Suspense } from "react";
import { ConfigProvider, Spin } from "antd";
import { themeColors, darkthemecolors } from "@/styles/theme";
import ptBR from "antd/es/locale/pt_BR";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { useTheme } from "@/hooks/useTheme";
import RoutesComponents from "@/routes";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      theme={theme === "dark" ? darkthemecolors : themeColors}
      locale={ptBR}
    >
      <ThemeProvider>
        <Suspense
          fallback={
            <Spin
              size="large"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            />
          }
        >
          <RoutesComponents />
        </Suspense>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
