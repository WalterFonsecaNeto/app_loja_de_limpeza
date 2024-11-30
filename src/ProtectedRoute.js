import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const tipoUsuario = localStorage.getItem("TipoUsuario");

  // Verifica se o usuário é Administrador
  if (tipoUsuario === "Administrador") {
    return children;
  }

  // Redireciona para a página de login ou uma página genérica
  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
