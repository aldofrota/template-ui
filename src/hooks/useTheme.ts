import { useThemeStore } from "@/state/themeStore";

export const useTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
};
