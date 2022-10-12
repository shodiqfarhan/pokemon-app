import { useMemo, useEffect, useState } from "react";
import { ThemeContext } from "../utils/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const mode = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme") || "light";
    setTheme(getTheme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={mode}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
