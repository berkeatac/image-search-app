import React, { useState, useEffect, useReducer } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Header from "../Header";
import ImageList from "../ImageList";
import PageButtons from "../PageButtons";
import ErrorBox from "../ErrorBox";
import imageGetter from "../../api/imageGetter";
import { AppContent, LoaderContainer } from "./style";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const initialState = {
  images: [],
  term: "istanbul",
  collection: 0,
  page: 1,
  total_pages: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PARAMS":
      return {
        ...state,
        term: action.payload.term,
        collection: action.payload.collection,
        page: 1,
      };
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload.images,
        total_pages: action.payload.total_pages,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async () => {
    setError("");
    setLoading(true);

    const [data, error] = await imageGetter(
      state.term,
      state.collection,
      state.page,
      setError
    );
    if (error) {
      setError(error);
    } else {
      const { results, total_pages } = data;
      dispatch({
        type: "SET_IMAGES",
        payload: { images: results, total_pages },
      });
      if (!results.length) setError("No result has been found");
    }

    setLoading(false);
  };

  useEffect(() => {
    onSearchSubmit();
  }, [state.term, state.collection, state.page]);

  return (
    <div>
      <GlobalStyle whiteColor />
      <Header state={state} dispatch={dispatch} />
      <AppContent>
        {loading && (
          <LoaderContainer className="loader-container">
            <ClipLoader />
          </LoaderContainer>
        )}
        {error !== "" && !loading && <ErrorBox errorMessage={error} />}
        {!loading && error === "" && (
          <>
            <ImageList images={state.images} />
            <PageButtons state={state} dispatch={dispatch} />
          </>
        )}
      </AppContent>
    </div>
  );
};

export default App;
