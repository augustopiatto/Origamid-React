import Rearct from 'react';

const Produto = ({ produto }) => {
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
      <h1>{produto.nome}</h1>
      <p>{real(produto.preco)}</p>
      {!!Object.keys(produto).length && (
        <img
          src={produto.fotos[0].src}
          alt={produto.fotos[0].titulo}
          key={produto.fotos[0].src}
        />
      )}
    </div>
  );
};

export default Produto;
