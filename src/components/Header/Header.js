import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/Hooks";
import "./Header.css";
const Header = () => {
  const {user, handelSignOut} = useFirebase()
  return (
    <div className="header-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login </Link>
        <Link to="/register">Register</Link>
        <Link to="/order">Order</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={handelSignOut}>Sign out</button>
        ) : (
          <Link to="/product">Products</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
