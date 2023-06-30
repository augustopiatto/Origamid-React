import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState({});

  const fetchApi = () => {
    return fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  };
  const cleanApi = () => {
    setProduto({});
  };
  return (
    <GlobalContext.Provider value={{ cleanApi, fetchApi, produto }}>
      {children}
    </GlobalContext.Provider>
  );
};
