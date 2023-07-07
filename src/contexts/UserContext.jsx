import React from "react";
import { TOKEN_POST, USER_GET } from "../api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({
      username: username,
      password: password,
    });
    const response = await fetch(url, options);
    const json = await response.json();
    window.localStorage.setItem("token", json.token);
    getUser(json.token);
  };

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
