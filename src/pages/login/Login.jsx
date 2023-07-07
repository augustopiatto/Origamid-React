import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import LoginCreate from "./LoginCreate.jsx";
import LoginPasswordLost from "./LoginPasswordLost.jsx";
import LoginPasswordReset from "./LoginPasswordReset.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
