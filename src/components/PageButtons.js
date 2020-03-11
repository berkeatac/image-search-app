import React from "react";

import "./PageButtons.css";

const PageButtons = ({ page, setPage, totalPages }) => {
  const changePage = change => {
    setPage(page + change);
  };

  const renderButton = (cond, text, amount) => {
    return (
      <button
        onClick={() => changePage(amount)}
        disabled={page === cond ? true : false}
        className={`button ${page === cond ? "disabled" : ""}`}
      >
        <p className="button-text">{text}</p>
      </button>
    );
  };

  return (
    <div className="pb-container">
      {renderButton(1, "Previous", -1)}
      {renderButton(totalPages, "Next", 1)}
    </div>
  );
};

export default PageButtons;
