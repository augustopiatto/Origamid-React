import React, { useState } from 'react';
import Pergunta from './Pergunta.jsx';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [resultado, setResultado] = useState(0);
  const [pagAtual, setPagAtual] = useState(0);
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const resultadoFinal = () => {
    const resultado = perguntas.filter(
      (pergunta) => pergunta.resposta === respostas[pergunta.id],
    );
    setResultado(`Você acertou: ${resultado.length} de ${perguntas.length}`);
  };

  const handleClick = () => {
    if (pagAtual < perguntas.length - 1) {
      setPagAtual(pagAtual + 1);
    } else {
      setPagAtual(pagAtual + 1);
      resultadoFinal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => {
        return (
          <div key={pergunta.id}>
            {pagAtual === index && (
              <fieldset>
                <Pergunta
                  pergunta={pergunta}
                  respostas={respostas}
                  setRespostas={setRespostas}
                />
                <button onClick={handleClick}>
                  {index !== perguntas.length - 1 ? 'Próximo' : 'Confirmar'}
                </button>
              </fieldset>
            )}
          </div>
        );
      })}
      {!!resultado && <p>Resultado Final: {resultado}</p>}
    </form>
  );
};

export default App;
