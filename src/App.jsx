import React from 'react';
import Produtos from './Produtos';
import Contato from './Contato';
import Loading from './Contato';
import './App.css';

const App = () => {
  // Utilize a API abaixo para puxar a lista de produto
  // https://ranekapi.origamid.dev/json/api/produto
  // Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
  // https://ranekapi.origamid.dev/json/api/produto/notebook

  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const listaProdutos = async () => {
    setProdutos([]);
    setLoading(true);
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      const json = await response.json();
      setProdutos(json);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <button onClick={listaProdutos} className="button">
        Produtos
      </button>
      <button className="button">Contato</button>
      {loading && <Loading />}
      {!!produtos.length && !loading && <Produtos produtos={produtos} />}
      <Contato />
    </div>
  );
};

export default App;
