import React from "react"; // Importa o React para o JSX funcionar
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const PaginaInicial = () => {
  const product = {
    id: 1,
    name: "Product 1",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: 99.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
  };

  return (
    <div>
      <Navbar />
      <Banner />
      
      <div className="container py-5">
        <h2 className="display-6 mb-4">Produtos em Destaque</h2>
        <div className="row g-4">
          {/* Adiciona um card para cada produto  FAZENDO UM MAP*/}
            <div key={product.id} className="col-md-6 col-lg-4">
              <ProductCard product={product} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
