import React from 'react';
import styles from './ProductCardAdm.module.css';

const ProductCardAdm = ({ product, onEdit, onToggleFeatured }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p className={styles.price}>
          R$ {product.price.toFixed(2)}
        </p>
        <div className={styles.actions}>
          <button 
            className={`${styles.featuredButton} ${product.featured ? styles.featured : ''}`}
            onClick={onToggleFeatured}
          >
            {product.featured ? 'Destaque ★' : 'Normal ☆'}
          </button>
          <button className={styles.editButton} onClick={onEdit}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAdm;