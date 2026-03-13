import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  const appStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: dark
      ? "linear-gradient(135deg,#1e1e2f,#0f0f1a)"
      : "linear-gradient(135deg,#667eea,#764ba2)",
    color: dark ? "white" : "black",
    fontFamily: "Arial"
  };

  return (
    <div style={appStyle}>

      <div style={{
        background: dark ? "#222" : "white",
        padding: "40px",
        borderRadius: "15px",
        textAlign: "center",
        width: "350px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}>

        <h1>Advanced Counter</h1>

        <button
          onClick={toggleTheme}
          style={{
            padding:"6px 12px",
            marginBottom:"20px",
            borderRadius:"5px",
            border:"none",
            cursor:"pointer"
          }}
        >
          Toggle Theme
        </button>

        <Counter />

      </div>

    </div>
  );
}

export default App;