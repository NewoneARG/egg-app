import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

export const Header = () => {
  return (
    <header className="header">
      <Link className="icon" to={"/"}><img src={logo} /></Link>
      <nav>
        <Link to={"/"}>Productos</Link>
        <Link to={"/favoritos"}>Favoritos</Link>
      </nav>
    </header>
  );
};
