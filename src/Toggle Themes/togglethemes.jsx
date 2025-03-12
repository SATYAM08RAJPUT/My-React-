import { useState } from "react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    setDarkMode((pre) => !pre);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "all 0.3s ease",
        }}
      >
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: darkMode ? "#fff" : "#333",
            color: darkMode ? "#000" : "#fff",
            transition: "background 0.3s ease",
          }}
        >
          {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </>
  );
};
export default ToggleTheme;
