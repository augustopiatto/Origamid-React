import React from "react";
import Input from "../../components/html_components/Input.jsx";
import Button from "../../components/html_components/Button.jsx";
import useForm from "../../hooks/useForm.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import Error from "../../helpers/Error.jsx";
import { PASSWORD_LOST } from "../../api.jsx";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perder", "resetar"),
      });
      const { json } = await request(url, options);
    }
  };

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
