import { ArrowRight, Truck, Shield, Clock, CheckCircle} from "lucide-react";
import { Link } from "react-router-dom";
import "./Banner.css";
function Banner(){
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="hero-title display-4 mb-4">
              Produtos de Limpeza para
              <span>Sua Casa Brilhar</span>
            </h1>
            <p className="lead mb-4">
              Encontre os melhores produtos de limpeza com preços imbatíveis e
              entrega rápida.
            </p>
            <Link to="/produtos" className="btn btn-primary btn-lg">
              Ver Produtos
              <ArrowRight className="ms-2" />
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-6">
                <div className="card feature-card">
                  <div className="card-body">
                    <Truck className="feature-icon" />
                    <h3 className="h5">Entrega Rápida</h3>
                    <p className="text-muted">Entregamos com rapidez e segurança</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card feature-card">
                  <div className="card-body">
                    <Shield className="feature-icon" />
                    <h3 className="h5">Compra Segura</h3>
                    <p className="text-muted">Pagamento protegido</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card feature-card">
                  <div className="card-body">
                    <Clock className="feature-icon" />
                    <h3 className="h5">Atendimento</h3>
                    <p className="text-muted">Suporte 24/7</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card feature-card">
                  <div className="card-body">
                  <CheckCircle className="feature-icon" />
                    <h3 className="h5">Qualidade</h3>
                    <p className="text-muted">Produtos certificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;