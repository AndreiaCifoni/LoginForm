import React, { useState } from "react";
import Form from "./Form";
import Welcome from "./Welcome";
import "./form.css";

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSuccess = () => {
    setIsSuccess(true);
    setShowError(false);
  };

  const onFail = () => {
    setIsSuccess(false);
    setShowError(true);
  };

  const onLogout = () => {
    setIsSuccess(false);
    setShowError(false);
  };

  return (
    <div>
      {isSuccess ? (
        <Welcome onLogout={onLogout} />
      ) : (
        <div>
          {showError ? (
            <div className="div-error">
              <p className="msg-error">Try again!</p>
            </div>
          ) : null}
          <Form onFail={onFail} onSuccess={onSuccess} />
        </div>
      )}
    </div>
  );
};

export default App;
