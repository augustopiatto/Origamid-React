import React from 'react';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Contato from './pages/Contato';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  // Utilize a API abaixo para puxar a lista de produto
  // https://ranekapi.origamid.dev/json/api/produto
  // Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  return (
    <BrowserRouter>
      <div className="body">
        <div className="buttons-container">
          <NavLink to="/" end className="button">
            Produtos
          </NavLink>
          <NavLink to="/contato" className="button">
            Contato
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
