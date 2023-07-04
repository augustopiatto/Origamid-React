import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const listaProdutos = async () => {
    setProdutos([]);
    setLoading(true);
    let json = [];
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
      json = await response.json();
    } finally {
      setTimeout(() => {
        setProdutos(json);
        setLoading(false);
      }, 1000);
    }
  };

  React.useEffect(() => {
    listaProdutos();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      {!!produtos.length &&
        !loading &&
        produtos.map((produto) => {
          return (
            <Link
              to={produto.id}
              key={produto.id}
              className={`${styles.item} animation-left-right`}
            >
              <img
                src={produto.fotos[0].src}
                alt={produto.fotos[0].titulo}
                className={styles.imagem}
              />
              <h1>{produto.nome}</h1>
            </Link>
          );
        })}
    </div>
  );
};

export default Produtos;
