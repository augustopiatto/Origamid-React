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
      {produto.fotos.map((foto) => (
        <img src={foto.src} alt={foto.titulo} key={foto.src} />
      ))}
    </div>
  );
};

export default Produto;
