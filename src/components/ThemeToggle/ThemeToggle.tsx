import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Switch } from "antd";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checkedChildren="🌙"
      unCheckedChildren="☀️"
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
  );
};

export default ThemeToggle;
