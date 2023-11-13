import React from 'react';
import logo from "../../Imagenes/Logo1.png"
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg miNavar ">
        <div className="container">
          <a className="navbar-brand" href="/">
           <img src={logo} alt="Logo del supermercado" width={120}/>
          </a>

          {/*Hamburguesa  */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Calcular">
                  Calcular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Graficos">
                  Ver gráfico
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Tablas">
                  ver tabla
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
