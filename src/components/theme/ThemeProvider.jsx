import { createContext, useContext, useEffect, useState } from "react";

// Tema üçün kontekst yaradılır
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Tema dəyişəndə `localStorage`-da yadda saxlanılır
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme; // HTML elementinə class əlavə edir
  }, [theme]);

  // Tema dəyişmə funksiyası
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Kontekst istifadəsi üçün hook
export const useTheme = () => useContext(ThemeContext);
