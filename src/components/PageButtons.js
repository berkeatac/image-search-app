import React from "react";
import PropTypes from "prop-types";

import "./PageButtons.css";

const PageButtons = ({ state, dispatch }) => {
  const changePage = change => {
    dispatch({ type: "SET_PAGE", payload: { page: state.page + change } });
  };

  return (
    <div className="pb-container">
      <button
        onClick={() => changePage(-1)}
        disabled={state.page === 1 ? true : false}
        className={`button ${state.page === 1 ? "disabled" : ""}`}
      >
        <p className="button-text">Previous</p>
      </button>
      <button
        onClick={() => changePage(1)}
        disabled={state.page === state.total_pages ? true : false}
        className={`button ${
          state.page === state.total_pages ? "disabled" : ""
        }`}
      >
        <p className="button-text">Next</p>
      </button>
    </div>
  );
};

PageButtons.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func
};

export default PageButtons;
