import React, { useState } from 'react';
import styles from './PageAdmin.module.css';
import ProductCardAdm from '../components/ProductCardAdm';
import ProductModal from '../components/ProductModal';

const Admin = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Notebook Dell",
      price: 4599.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      featured: true
    },
    {
      id: 2,
      name: "MacBook Pro",
      price: 12999.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: false
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: 12999.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: false
    },
    {
      id: 4,
      name: "MacBook Pro",
      price: 12999.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: false
    },
    
    {
      id: 5,
      name: "MacBook Pro",
      price: 12999.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      featured: false
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleNewProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id ? {...productData, id: p.id} : p
      ));
    } else {
      setProducts([...products, {...productData, id: Date.now()}]);
    }
    setIsModalOpen(false);
  };

  const toggleFeatured = (productId) => {
    setProducts(products.map(p => 
      p.id === productId ? {...p, featured: !p.featured} : p
    ));
  };

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <h1>Gerenciamento de Produtos</h1>
        <button className={styles.newButton} onClick={handleNewProduct}>
          + Novo Produto
        </button>
      </header>

      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCardAdm
            key={product.id}
            product={product}
            onEdit={() => handleEditProduct(product)}
            onToggleFeatured={() => toggleFeatured(product.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <ProductModal
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Admin;