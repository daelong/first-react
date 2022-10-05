import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContent";

function DarkOrLight(props) {
  // provider에서 사용할 value들은 제일 위에 컴포넌트에서 자체적으로 관리
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContext />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
