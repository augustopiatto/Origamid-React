import React from 'react';
import Produtos from './Produtos';
import Produto from './Produto';
import Contato from './Contato';
import Loading from './Contato';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

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

  React.useEffect(() => {
    listaProdutos();
  }, []);

  return (
    <BrowserRouter>
      <div className="body">
        <div className="buttons-container">
          <NavLink to="/" onClick={listaProdutos} className="button">
            Produtos
          </NavLink>
          <NavLink to="/contato" className="button">
            Contato
          </NavLink>
        </div>
        {loading && <Loading />}
        <Routes>
          <Route
            path="/"
            element={
              !!produtos.length && !loading && <Produtos produtos={produtos} />
            }
          />
          <Route path="/contato" element={<Contato />} />
          <Route path="/:id" element={<Produto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
