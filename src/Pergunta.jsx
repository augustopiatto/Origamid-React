import React from 'react';
import Radio from './Radio.jsx';

const Pergunta = ({ pergunta, respostas, setRespostas }) => {
  return (
    <>
      <legend>{pergunta.pergunta}</legend>
      {pergunta.options.map((option) => {
        return (
          <Radio
            option={option}
            resposta={pergunta.resposta}
            respostas={respostas}
            setRespostas={setRespostas}
            value={respostas[pergunta.id]}
            key={option}
            {...pergunta}
          />
        );
      })}
    </>
  );
};

export default Pergunta;
