import React from 'react';
import './Produtos.css';
import { Link, useParams } from 'react-router-dom';

const Produtos = ({ produtos }) => {
  return (
    <div className="container">
      {produtos.map((produto) => {
        return (
          <Link to={produto.id} key={produto.id}>
            <img
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
              className="imagem"
            />
            <h1>{produto.nome}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Produtos;
