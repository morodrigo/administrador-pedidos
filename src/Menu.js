// Menu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ loggedIn, setLoggedIn, title }) {
  const [mostrarSubMenu, setMostrarSubMenu] = useState(false);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setLoggedIn(false);
  };

  return (
    <div className="header-container mb-4">
      <div className="header-content pt-4">
        <div className="title">
          <h1>{title}</h1>
          <h2>Aquí encontrarás tus conversaciones</h2>
        </div>
        <div className="menu-toggle">
          <div className="menu-circle">
            <button
              className="menu-button"
              onClick={() => setMostrarSubMenu(!mostrarSubMenu)}
            >
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </button>
            {/* Submenú "Cerrar sesión" */}
            {mostrarSubMenu && (
              <ul className="sub-menu rounded-3">
                <li class="cerrar-sesion " onClick={handleLogout}>
                  <span>Cerrar sesión</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
