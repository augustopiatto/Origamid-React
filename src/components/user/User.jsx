import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../../pages/Feed";
import { Route, Routes } from "react-router-dom";
import UserPhotoPost from "../../pages/UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../contexts/UserContext";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;