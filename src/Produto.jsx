import React from 'react';
import { GlobalContext } from './GlobalStorage';

const Produto = () => {
  const { cleanApi, fetchApi, produto } = React.useContext(GlobalContext);

  function real(value) {
    const formattingOptions = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    };
    const realString = new Intl.NumberFormat('pt-BR', formattingOptions);
    return realString.format(value);
  }

  return (
    <div>
      <button onClick={fetchApi} style={{ marginRight: '16px' }}>
        Puxar API
      </button>
      <button onClick={cleanApi}>Limpar infos</button>
      {!!Object.keys(produto).length && (
        <div>
          <h1>{produto.nome}</h1>
          <p>{real(produto.preco)}</p>
          <img
            src={produto.fotos[0].src}
            alt={produto.fotos[0].titulo}
            key={produto.fotos[0].src}
          />
        </div>
      )}
    </div>
  );
};

export default Produto;
