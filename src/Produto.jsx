import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading.jsx';

const Produto = () => {
  const params = useParams();

  const [produto, setProduto] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const listaProduto = async () => {
    setProduto({});
    setLoading(true);
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
      );
      const json = await response.json();
      setProduto(json);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    listaProduto();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {!!Object.keys(produto).length && !loading && (
        <div>
          {produto.fotos.map((foto) => {
            return (
              <img
                src={foto.src}
                alt={foto.titulo}
                key={foto.src}
                className="imagem"
              />
            );
          })}
          <h1>{produto.nome}</h1>
          <div>{produto.preco}</div>
          <p>{produto.descricao}</p>
        </div>
      )}
    </div>
  );
};

export default Produto;
