import React from "react";
import PropTypes from "prop-types";
import "./ErrorBox.css";

const ErrorBox = ({ errorMessage }) => {
  return (
    <div className="error-box">
      <p className="error-text">{errorMessage}</p>
    </div>
  );
};

ErrorBox.propTypes = {
  errorMessage: PropTypes.string
};

export default ErrorBox;
