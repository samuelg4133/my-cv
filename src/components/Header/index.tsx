import React from "react";

import profileImage from "../../assets/profile.jpeg";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="avatar">
        <img src={profileImage} alt="Foto de Perfil" />
      </div>
      <div className="profile-info">
        <h2>SAMUEL GOMES</h2>
        <p>Desenvolvedor Front-End</p>
      </div>
    </header>
  );
};

export default Header;
