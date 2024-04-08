// App.js
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importamos Routes

import Menu from "./Menu";
import OptionBoxes from "./OptionBoxes";
import ChatView from "./ChatView";
import SubHeaderView from "./SubHeaderView";

function App() {
  const [loggedIn, setLoggedIn] = useState(true); // Cambia a `false` si no hay sesión iniciada

  return (
    <Router>
      <div className="app">
        <Menu
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          title="Cafetería Gust 18"
        />
        {/* Utilizamos Routes en lugar de Route */}
        <Routes>
          <Route path="/" element={<OptionBoxes />} />
          <Route path="/chat" element={<ChatView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
