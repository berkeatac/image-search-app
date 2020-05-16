import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { customStyles, options, DropdownIndicator } from "./dropdownOptions";
import logo from "../../assets/logo.svg";

import "./Header.css";

const Header = ({ dispatch }) => {
  const inputEl = useRef("");
  const dropEl = useRef(0);

  const getImages = event => {
    console.log(inputEl, dropEl);

    event.preventDefault();
    if (inputEl.current.value !== "" && dropEl.current.state.value) {
      dispatch({
        type: "SET_PARAMS",
        payload: {
          term: inputEl.current.value,
          collection: dropEl.current.state.value.value
        }
      });
    }
  };

  useEffect(() => {
    inputEl.current.value = "istanbul";
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <form onSubmit={e => getImages(e)} className="form-container">
        <input
          type="text"
          placeholder="Query"
          ref={inputEl}
          className="query-input"
        />
        <Select
          ref={dropEl}
          className="dropdown"
          options={options}
          placeholder="Collections"
          defaultValue={{ label: "Default", value: 0 }}
          styles={customStyles}
          components={{ DropdownIndicator }}
        />
        <button type="submit" className="submit-button">
          <p className="submit-text">SEARCH</p>
        </button>
      </form>
    </div>
  );
};

Header.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func
};

export default Header;
