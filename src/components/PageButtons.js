import React from "react";

import "./PageButtons.css";

const PageButtons = ({ state, dispatch }) => {
  const changePage = change => {
    dispatch({ type: "SET_PAGE", payload: { page: state.page + change } });
  };

  const renderButton = (cond, text, amount) => {
    return (
      <button
        onClick={() => changePage(amount)}
        disabled={state.page === cond ? true : false}
        className={`button ${state.page === cond ? "disabled" : ""}`}
      >
        <p className="button-text">{text}</p>
      </button>
    );
  };

  return (
    <div className="pb-container">
      {renderButton(1, "Previous", -1)}
      {renderButton(state.total_pages, "Next", 1)}
    </div>
  );
};

export default PageButtons;
