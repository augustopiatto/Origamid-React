import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading.jsx';
import styles from './Produto.module.css';
import Head from '../components/Head.jsx';

const Produto = () => {
  const { id } = useParams();

  const [produto, setProduto] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const listaProduto = async () => {
    setProduto({});
    setLoading(true);
    let json = [];
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`,
      );
      if (response.status !== 200) {
        setError('Error');
      }
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
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!!Object.keys(produto).length && !loading && !error)
    return (
      <div>
        <Head title="React | Produto" description="Olha que produto bonito" />
        <div className={`${styles.container} animation-left-right`}>
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
        )
      </div>
    );
};

export default Produto;
