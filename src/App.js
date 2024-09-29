import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import GameDetail from "./components/GameDetail"; // Import your GameDetail component

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} /> {/* Add the GameDetail element */}
      </Routes>
    </div>
  );
}

export default App;