import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading.jsx';
import styles from './Produto.module.css';

const Produto = () => {
  const params = useParams();

  const [produto, setProduto] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const listaProduto = async () => {
    setProduto({});
    setLoading(true);
    let json = [];
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
      );
      json = await response.json();
      setProduto(json);
    } finally {
      setTimeout(() => {
        setProduto(json);
        setLoading(false);
      }, 1000);
    }
  };

  React.useEffect(() => {
    listaProduto();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {!!Object.keys(produto).length && !loading && (
        <div className={styles.container}>
          <div className={styles.imagemContainer}>
            {produto.fotos.map((foto) => {
              return (
                <img
                  src={foto.src}
                  alt={foto.titulo}
                  key={foto.src}
                  className={styles.imagem}
                />
              );
            })}
          </div>
          <div className={styles.produto}>
            <h1>{produto.nome}</h1>
            <span>R$ {produto.preco}</span>
            <p>{produto.descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produto;
