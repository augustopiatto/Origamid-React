import React from 'react';
import styles from './Contato.module.css';
import imagem from '../assets/imagem.jpg';
import Head from '../components/Head';

const Contato = () => {
  return (
    <div className={`${styles.container} animation-left-right`}>
      <Head title="React | Contato" description="Entre em contato" />
      <img src={imagem} alt="contato" className={styles.imagem} />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>augusto@example.com</li>
          <li>+55 (11) 99999-9999</li>
          <li>Rua Certeira, 100</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
