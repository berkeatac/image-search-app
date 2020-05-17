import React from "react";
import PropTypes from "prop-types";

import { ButtonsContainer, ButtonText, PageButton } from "./style";

const PageButtons = ({ state, dispatch }) => {
  const changePage = (change) => {
    dispatch({ type: "SET_PAGE", payload: { page: state.page + change } });
  };

  return (
    <ButtonsContainer>
      <PageButton
        onClick={() => changePage(-1)}
        disabled={state.page === 1 ? true : false}
        data-cy="prev-page"
      >
        <ButtonText>Previous</ButtonText>
      </PageButton>
      <PageButton
        onClick={() => changePage(1)}
        disabled={state.page === state.total_pages ? true : false}
        data-cy="next-page"
      >
        <ButtonText>Next</ButtonText>
      </PageButton>
    </ButtonsContainer>
  );
};

PageButtons.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};

export default PageButtons;
