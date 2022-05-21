import React, { useState } from "react";
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
    }
    onFail();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Name</label>
          <input
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
        <div>
          <label>E-mail</label>
          <input
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
        <div>
          <label>Password</label>
          <input
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
        <input type="submit" value="Subscribe!" />
      </form>
    </div>
  );
};

export default Form;
