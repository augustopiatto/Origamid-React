import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/html_components/Input";
import Button from "../../components/html_components/Button";
import useForm from "../../hooks/UseForm";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const enviarForm = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={enviarForm}>
        <Input label="Username" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
