import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import ProtectedRoute from "../Routes/ProtectedRoute";

function Navbar() {
  const [pesquisa, setPesquisa] = useState("");
  localStorage.setItem("TipoUsuario", "Administrador");
  //! Vou criar um menu de login onde sera feito o cadatro ou login e o usuario adm tera uma conta do tipo administrador onde ao se logar tera acesso a pagina adm que esta com o protected route

  function AtualizarPesquisa(event) {
    setPesquisa(event);
  }

  console.log("Navbar pesquisa: ", pesquisa);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          CleanStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="search-container mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar produtos..."
              value={pesquisa}
              onChange={(e) => AtualizarPesquisa(e.target.value)}
            />
            <Search className="search-icon" />
          </div>

          <ul className="navbar-nav ms-auto">
            <ProtectedRoute>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Administrador
                </Link>
              </li>
            </ProtectedRoute>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/produtos" className="nav-link">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <button className="cart-button">
                <ShoppingCart />
                <span className="cart-count">0</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
