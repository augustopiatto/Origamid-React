import React from 'react';
import Titulo from './Titulo.jsx';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <>
      <Titulo titulo="Produtos" />
      {produtos.map((produto) => (
        <div
          key={produto.nome}
          style={{ margin: '16px 0', padding: '16px', border: '1px solid' }}
        >
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Produtos;
