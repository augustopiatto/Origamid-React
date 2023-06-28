import React from 'react';
import Produto from './Produto.jsx';

const App = () => {
  const [produto, setProduto] = React.useState({});
  const [carregando, setCarregando] = React.useState(false);

  async function fetchApi(event) {
    setProduto({});
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const responseJson = await response.json();
    setTimeout(() => {
      setCarregando(false);
      setProduto(responseJson);
    }, 1000);
  }

  return (
    <div>
      <button onClick={fetchApi} style={{ marginRight: '16px' }}>
        notebook
      </button>
      <button onClick={fetchApi} style={{ marginRight: '16px' }}>
        smartphone
      </button>
      <button onClick={fetchApi}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!!Object.keys(produto).length && <Produto produto={produto} />}
    </div>
  );
};

export default App;
