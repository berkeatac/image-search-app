import React from "react";
import PropTypes from "prop-types";
import { ErrorContainer, ErrorText } from "./style";

const ErrorBox = ({ errorMessage }) => {
  return (
    <ErrorContainer>
      <ErrorText className="error-text">{errorMessage}</ErrorText>
    </ErrorContainer>
  );
};

ErrorBox.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorBox;
