import React from 'react';
import './Produtos.css';

const Produtos = ({ produtos }) => {
  return (
    <div className="container">
      {produtos.map((produto) => {
        return (
          <div>
            <img
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
              className="imagem"
            />
            <h1>{produto.nome}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Produtos;
