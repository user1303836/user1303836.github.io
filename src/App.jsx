import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>testtext</h1>
        <nav>
          <ul>
            <li>projects</li>
            <li>about</li>
            <li>misc</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">{/* Main content will go here */}</div>
    </div>
  );
}

export default App;
