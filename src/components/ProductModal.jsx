import React, { useState, useEffect } from 'react';
import styles from './ProductModal.module.css';

const ProductModal = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    featured: false
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price.toString(),
        image: product.image,
        featured: product.featured
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price)
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>{product ? 'Editar Produto' : 'Novo Produto'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Nome do Produto</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Preço</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>URL da Imagem</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              Produto em Destaque
            </label>
          </div>

          <div className={styles.modalActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancelar
            </button>
            <button type="submit" className={styles.saveButton}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;