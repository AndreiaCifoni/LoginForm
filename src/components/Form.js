import React, { useState } from "react";

const Form = () => {
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHadler = (event) => {
    setValidation({});
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value="validation.name"
            onChange={onChangeHadler}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            value="validation.email"
            onChange={onChangeHadler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value="validation.password"
            onChange={onChangeHadler}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
