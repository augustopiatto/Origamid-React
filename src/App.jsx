import React from 'react';
import { GlobalStorage } from './GlobalStorage.jsx';
import Produto from './Produto.jsx';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
