import React, { useState } from "react";
import Select from "react-select";
import { customStyles, options, DropdownIndicator } from "./dropdownOptions";
import logo from "../assets/logo.svg";

import "./Header.css";

const Header = ({ setTerm, setCollection }) => {
  const [inputParams, setInputParams] = useState({ query: "", colId: 0 });

  const getImages = event => {
    event.preventDefault();
    if (inputParams.query !== "") {
      setTerm(inputParams.query);
      setCollection(inputParams.colId);
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={e => getImages(e)} className="submit-form">
          <input
            type="text"
            value={inputParams.query}
            onChange={e =>
              setInputParams({ ...inputParams, query: e.target.value })
            }
            className="query-input"
          />
          <Select
            onChange={item =>
              setInputParams({ ...inputParams, colId: item.value })
            }
            className="dropdown"
            options={options}
            placeholder="Collections"
            styles={customStyles}
            components={{ DropdownIndicator }}
          />
          <button type="submit" className="submit-button">
            <p className="submit-text">SEARCH</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
