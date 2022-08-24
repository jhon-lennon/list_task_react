import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom"
function Nav() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand">App Tasks</span>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item ">
                <Link className="nav-link active" to={'cadastro'}>Cadastre-se</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to={'login'}>Entrar</Link>

              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav;