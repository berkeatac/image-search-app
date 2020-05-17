import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { customStyles, options, DropdownIndicator } from "./dropdownOptions";
import logo from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  LogoComponent,
  LogoImage,
  HeaderFormContainer,
  HeaderQueryInput,
  HeaderDropdown,
  HeaderSubmitText,
  HeaderSubmitButton,
} from "./style";

const Header = ({ dispatch }) => {
  const inputEl = useRef("");
  const dropEl = useRef(0);

  const getImages = (event) => {
    console.log(inputEl, dropEl);

    event.preventDefault();
    if (inputEl.current.value !== "" && dropEl.current.state.value) {
      dispatch({
        type: "SET_PARAMS",
        payload: {
          term: inputEl.current.value,
          collection: dropEl.current.state.value.value,
        },
      });
    }
  };

  useEffect(() => {
    inputEl.current.value = "istanbul";
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoComponent>
          <LogoImage src={logo} alt="logo" />
        </LogoComponent>
      </LogoContainer>
      <HeaderFormContainer onSubmit={(e) => getImages(e)}>
        <HeaderQueryInput
          type="text"
          placeholder="Query"
          ref={inputEl}
          data-cy="query-text"
        />
        <HeaderDropdown
          ref={dropEl}
          options={options}
          placeholder="Collections"
          defaultValue={{ label: "Default", value: 0 }}
          styles={customStyles}
          components={{ DropdownIndicator }}
          data-cy="query-dropdown"
        />
        <HeaderSubmitButton type="submit" data-cy="query-button">
          <HeaderSubmitText>SEARCH</HeaderSubmitText>
        </HeaderSubmitButton>
      </HeaderFormContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};

export default Header;
