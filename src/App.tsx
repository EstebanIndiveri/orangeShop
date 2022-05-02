import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1>hola este es el primer titulo</h1>
        </div>
        <div style={{ width: "50%" }}>
          <h1 className="app_hola">hola</h1>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "red",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "40px" }}>Esta es la segunda sección xdxdd </p>
      </div>
    </div>
  );
}

export default App;
