import React from 'react';

const Radio = ({ id, option, value, respostas, setRespostas }) => {
  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  return (
    <label>
      <input
        id={id}
        checked={value === option}
        type="radio"
        value={option}
        onChange={handleChange}
      />
      {option}
    </label>
  );
};

export default Radio;
