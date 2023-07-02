import React, { useState } from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const [cores, setCores] = useState(['azul', 'roxo']);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  };

  const handleChecked = (cor) => {
    return cores.includes(cor);
  };

  return (
    <>
      {coresArray.map((cor) => {
        return (
          <label key={cor} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        );
      })}
    </>
  );
};

export default App;
