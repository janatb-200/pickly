import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("picklyTheme") === "dark";
  });

  const toggleTheme = () => {
    setDarkMode((previousMode) => {
      const newMode = !previousMode;

      localStorage.setItem(
        "picklyTheme",
        newMode ? "dark" : "light"
      );

      return newMode;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;