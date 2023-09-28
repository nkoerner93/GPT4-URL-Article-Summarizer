import React from "react";

import "./App.css";

import Hero from "../components/Hero";
import Demo from "../components/Demo";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </div>
    </>
  );
};

export default App;
