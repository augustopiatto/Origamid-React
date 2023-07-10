import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Photo from "./pages/Photo.jsx";
import "./App.css";
import { UserStorage } from "./contexts/UserContext.jsx";
import User from "./components/user/User.jsx";
import ProtectedRoute from "./helpers/ProtectedRoute.jsx";
import UserProfile from "./pages/UserProfile.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
