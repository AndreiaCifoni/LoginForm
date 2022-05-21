import React, { useState } from "react";
import "./form.css";
// import { database } from "./database";

const database = {
  name: "Andreia Cifoni",
  email: "admin@admin.com",
  password: "mike123",
};

const Form = ({ onSuccess, onFail }) => {
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      validation.name === database.name &&
      validation.email === database.email &&
      validation.password === database.password
    ) {
      onSuccess();
    } else onFail();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="input">
          <label>Name</label>
          <input
            className="text-field"
            type="text"
            value={validation.name}
            onChange={(event) => {
              setValidation({
                ...validation,
                name: event.target.value,
              });
            }}
          />
        </div>
        <div className="input">
          <label>E-mail</label>
          <input
            className="text-field"
            type="email"
            value={validation.email}
            onChange={(event) => {
              setValidation({
                ...validation,
                email: event.target.value,
              });
            }}
          />
        </div>
        <div className="input">
          <label>Password</label>
          <input
            className="text-field"
            type="password"
            value={validation.password}
            onChange={(event) => {
              setValidation({
                ...validation,
                password: event.target.value,
              });
            }}
          />
        </div>
        <input className="btn btn-submit" type="submit" value="Subscribe!" />
      </form>
    </div>
  );
};

export default Form;
