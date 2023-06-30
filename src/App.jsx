import React from 'react';

const formInicial = {
  nome: '',
  email: '',
  senha: '',
  cep: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  estado: '',
};

const App = () => {
  const [form, setForm] = React.useState(formInicial);
  const changeForm = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const postApi = async (event) => {
    event.preventDefault();
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );
    if (response.status !== 200) {
      window.alert('Erro');
      return;
    }
    const json = await response.json();
    setForm(formInicial);
    window.alert('Cadastro com sucesso!');
  };

  return (
    <>
      <form onSubmit={postApi}>
        {Object.keys(form).map((key, index) => {
          return (
            <div key={key}>
              <label htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                id={key}
                type="text"
                value={form[key]}
                onChange={changeForm}
              />
            </div>
          );
        })}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
