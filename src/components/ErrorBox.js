import React from "react";
import "./ErrorBox.css";

const ErrorBox = ({ errorMessage }) => {
  return (
    <div className="error-box">
      <p className="error-text">{errorMessage}</p>
    </div>
  );
};

export default ErrorBox;
