import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Routes from './Routes';
import SnackWrapper from './SnackWrapper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackWrapper>
          <NavBar />
          <Routes />
        </SnackWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
