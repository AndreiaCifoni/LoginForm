import React from "react";
// import { database } from "./database";

const database = {
  name: "Andreia Cifoni",
  email: "admin@admin.com",
  password: "mike123",
};

const Welcome = () => {
  return (
    <div>
      <p>{`Welcome ${database.name}!!`}</p>
    </div>
  );
};

export default Welcome;
