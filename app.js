import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app">
      <h1>React State Management Apps</h1>

      <Counter />
      <ThemeToggle />
    </div>
  );
}

export default App;
