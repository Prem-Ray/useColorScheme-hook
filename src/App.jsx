import { useColorScheme } from "./useColorScheme.jsx";
import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const { appearance } = useColorScheme();
  const [theme, setTheme] = useState(appearance);

  // Sync system theme
  useEffect(() => {
    setTheme(appearance);
  }, [appearance]);

  // Apply theme to body (important for real apps)
  useEffect(() => {
    document.body.style.background =
      theme === "dark" ? "#0f172a" : "#f8fafc";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isDark
          ? "linear-gradient(135deg, #020617, #0f172a)"
          : "linear-gradient(135deg, #e2e8f0, #ffffff)",
        color: isDark ? "#e2e8f0" : "#020617",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "16px",
          background: isDark ? "#020617" : "#ffffff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          🎨 Color Scheme Detector
        </h1>

        <p style={{ marginBottom: "20px", opacity: 0.7 }}>
          Automatically detects your system theme and updates in real-time.
        </p>

        <h2 style={{ marginBottom: "20px" }}>
          Current Theme:{" "}
          <span style={{ color: isDark ? "#38bdf8" : "#2563eb" }}>
            {theme.toUpperCase()}
          </span>
        </h2>

        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: isDark ? "#38bdf8" : "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Toggle Theme
        </button>

        <p style={{ marginTop: "20px", fontSize: "12px", opacity: 0.6 }}>
          System preference sync is active
        </p>
      </div>
    </div>
  );
}

export default App;