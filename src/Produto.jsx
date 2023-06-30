import React from 'react';
import useFetch from './useFetch.jsx';

const Produto = () => {
  const { request, data, setData, loading, error } = useFetch();

  function real(value) {
    const formattingOptions = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    };
    const realString = new Intl.NumberFormat('pt-BR', formattingOptions);
    return realString.format(value);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/smartphone',
        {},
      );
    };
    fetchData();
  }, [request]);

  return (
    <div>
      <button
        onClick={() =>
          request(
            'https://ranekapis.origamid.dev/json/api/produto/smartphone',
            {},
          )
        }
        style={{ marginRight: '16px' }}
      >
        Smartphone
      </button>
      <button
        onClick={() =>
          request('https://ranekapi.origamid.dev/json/api/produto/tablet', {})
        }
        style={{ marginRight: '16px' }}
      >
        Tablet
      </button>
      <button onClick={() => setData({})}>Limpar API</button>
      {Object.keys(error).length ? (
        <div>erro</div>
      ) : loading ? (
        <div>Carregando</div>
      ) : (
        !loading &&
        !!Object.keys(data).length && (
          <div>
            <h1>{data.nome}</h1>
            <p>{real(data.preco)}</p>
            <img
              src={data.fotos[0].src}
              alt={data.fotos[0].titulo}
              key={data.fotos[0].src}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Produto;
