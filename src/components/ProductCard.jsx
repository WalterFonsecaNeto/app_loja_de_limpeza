import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ product }){
  return (
    <Link to={`/produto/${product.id}`} className="product-card">
      <div className="card h-100">
        <div className="position-relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top product-image"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <span className="product-category">
            {product.category}
          </span>
        </div>
        <div className="card-body">
          <h3 className="card-title h5">{product.name}</h3>
          <p className="card-text text-muted">{product.description}</p>
          <div className="d-flex align-items-center mb-3">
            <Star className="rating-star" />
            <Star className="rating-star" />
            <Star className="rating-star" />
            <Star className="rating-star" />
            <Star className="rating-star empty" />
            <span className="ms-2 text-muted">(4.0)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="product-price">
              R$ {product.price.toFixed(2)}
            </span>
            <button className="btn btn-primary">
              <ShoppingCart className="me-2" />
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
