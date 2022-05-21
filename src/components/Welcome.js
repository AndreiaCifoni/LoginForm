import React from "react";
import "./form.css";
// import { database } from "./database";

const database = {
  name: "Andreia Cifoni",
  email: "admin@admin.com",
  password: "mike123",
};

const Welcome = ({ onLogout }) => {
  const onClickHandler = () => {
    onLogout();
  };

  return (
    <div className="welcome">
      <p>{`Welcome ${database.name}!!`}</p>
      <button className="btn btn-success" onClick={onClickHandler}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;
