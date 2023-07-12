import React from "react";
import Feed from "./Feed.jsx";
import Head from "../helpers/Head.jsx";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};

export default Home;
