import React, { useState } from "react";
import Form from "./Form";
import Welcome from "./Welcome";

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSuccess = () => {
    setIsSuccess(true);
  };

  const onFail = () => {
    setIsSuccess(false);
    alert("error");
  };

  return (
    <div>
      {isSuccess ? <Welcome /> : <Form onFail={onFail} onSuccess={onSuccess} />}
    </div>
  );
};

export default App;
