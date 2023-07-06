import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const enviarForm = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify({ username, password }));
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const json = await response.json();
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={enviarForm}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
        <Link to="/login/criar">Cadastro</Link>
      </form>
    </section>
  );
};

export default LoginForm;
