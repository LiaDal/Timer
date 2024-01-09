import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Timer from "./Components/Timer.tsx";
import Countdown from "./Components/Countdown.tsx";
import StartPage from "./Components/StartPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />}></Route>
          <Route path="/Timer" element={<Timer />}></Route>
          <Route path="/Countdown" element={<Countdown />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
