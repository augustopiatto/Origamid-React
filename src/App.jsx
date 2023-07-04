import React from 'react';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Contato from './pages/Contato';
import Loading from './components/Loading';
import styles from './App.module.css';
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
    let json = [];
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      json = await response.json();
    } finally {
      setTimeout(() => {
        setProdutos(json);
        setLoading(false);
      }, 1000);
    }
  };

  React.useEffect(() => {
    listaProdutos();
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.body}>
        <div className={styles.buttonsContainer}>
          <NavLink to="/" onClick={listaProdutos} className={styles.button}>
            Produtos
          </NavLink>
          <NavLink to="/contato" className={styles.button}>
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
