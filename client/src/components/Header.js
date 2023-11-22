import React from 'react'
import logo from '../images/logo_evitra.png'
import {useLocation} from 'react-router-dom';

const Header = () => {

    const {state} = useLocation();

    console.log("HOLA STATE"+state?.nombre);

    return (
        <header class="navbar">
          <nav>
            <ul class="menu">
              {state?.logged ? (
                <>
                  {/* Renderizar elementos si state.logged es true */}
                  <li class="iniciar"><a href='#'>Bienvenido, {state?.nombre}</a></li>
                </>
              ) : (
                // Renderizar elementos si state.logged es false o null
                <li class="iniciar">NO<a href='#'></a></li>
              )}
            </ul>
          </nav>
          <img src={logo} alt="logo" class="img-logo" />
        </header>
      );
    }

export default Header