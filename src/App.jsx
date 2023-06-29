import React from 'react';
import Produto from './Produto.jsx';

const App = () => {
  const [produto, setProduto] = React.useState({});
  const [carregando, setCarregando] = React.useState(false);

  React.useEffect(() => {
    const preferencia = window.localStorage.getItem('produto');
    if (preferencia) {
      fetchApi(preferencia);
    }
  }, []);

  React.useEffect(() => {
    if (produto.nome) {
      window.localStorage.setItem('produto', produto.nome);
    }
  }, [produto]);

  async function fetchApi(nomeProduto) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`,
    );
    const responseJson = await response.json();
    setTimeout(() => {
      setCarregando(false);
      setProduto(responseJson);
    }, 1000);
  }

  return (
    <div>
      <h1>Preferência: {produto.nome && produto.nome}</h1>
      <button
        onClick={() => fetchApi('notebook')}
        style={{ marginRight: '16px' }}
      >
        notebook
      </button>
      <button
        onClick={() => fetchApi('smartphone')}
        style={{ marginRight: '16px' }}
      >
        smartphone
      </button>
      {carregando ? <p>Carregando...</p> : <Produto produto={produto} />}
    </div>
  );
};

export default App;
