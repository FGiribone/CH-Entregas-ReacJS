import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"


function NavBar(){
  //const titulos = ["Home", "Galeria", "Promociones", "Cotización Dólar"];

  return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <div className="is-flex">
              <span className="icon is-medium">
                <img src="https://iili.io/JxdPRGj.png" alt="Project Icon V1" border="0"/>
              </span>
              <p className="navbar-title">Home</p>
            </div>
          </Link>
  
          <Link
            to="/"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
  
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/galeria" className="navbar-item">
              <div className="is-flex">
                <span className="icon is-medium">
                  <img src="https://iili.io/JxdPRGj.png" alt="Project Icon V1" border="0"/>
                </span>
                <p>Galeria</p>
              </div>
            </Link>
  
            <Link to="/promociones" className="navbar-item">
              <div className="is-flex">
                <span className="icon is-medium">
                  <img src="https://iili.io/JxdPRGj.png" alt="Project Icon V1" border="0"/>
                </span>
                <p>Promociones</p>
              </div>
            </Link>
  
            <Link to="/cotizacion-dolar" className="navbar-item">
              <div className="is-flex">
                <span className="icon is-medium">
                <img src="https://iili.io/JxdPRGj.png" alt="Project Icon V1" border="0" />
                </span>
                <p>Cotización Dólar</p>
              </div>
            </Link>
          </div>
  
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/registrarse" className="button is-primary custom-button">
                <strong>Registrarse</strong>
                </Link>
                <Link to="/iniciar-sesion" className="button is-light">
                  Iniciar Sesión
                </Link>
                <Link to="/cart" className="button is-light header-Cart-Button">
                <span className="header-cart-price">Carrito</span>
                  <span className="cart-price">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
              </Link>
        </div>
      </div>
    </div>
        </div>
      </nav>
    );
  }
  



export default NavBar;