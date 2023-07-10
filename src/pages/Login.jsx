import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm.jsx";
import LoginCreate from "../components/login/LoginCreate.jsx";
import LoginPasswordLost from "../components/login/LoginPasswordLost.jsx";
import LoginPasswordReset from "../components/login/LoginPasswordReset.jsx";
import { UserContext } from "../contexts/UserContext.jsx";
import styles from "./Login.module.css";
import NotFound from "./NotFound.jsx";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
