import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "../pages/PaginaInicial";
import ProtectedRoute from "./ProtectedRoute";
import PaginaProdutos from "../pages/PaginaProdutos";
import PageAdmin from "../pages/PageAdmin";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/produtos" element={<PaginaProdutos/>} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <PageAdmin/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
