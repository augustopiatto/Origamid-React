import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/login">Login / Criar</Link>
    </div>
  );
};

export default Home;
