import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';

const Produtos = ({ produtos }) => {
  return (
    <div className={styles.container}>
      {produtos.map((produto) => {
        return (
          <Link to={produto.id} key={produto.id} className={styles.item}>
            <img
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
              className={styles.imagem}
            />
            <h1>{produto.nome}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Produtos;
