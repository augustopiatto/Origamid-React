import React from 'react';
import Home from '../components/Home.jsx';
import Produtos from '../components/Produtos.jsx';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <>
      <ul>
        <li>
          <a href={'/'}>Home</a>
        </li>
        <li>
          <a href={'/produtos'}>Produtos</a>
        </li>
      </ul>
      <Component />
    </>
  );
};

export default App;
