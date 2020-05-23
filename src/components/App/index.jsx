import React, { useState, useEffect, useReducer } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { createGlobalStyle } from "styled-components";

import Header from "../Header";
import ImageList from "../ImageList";
import PageButtons from "../PageButtons";
import ErrorBox from "../ErrorBox";
import Footer from "../Footer";
import imageGetter from "../../api/imageGetter";
import { appReducer, initialState } from "../../reducers/appReducer";

import { AppContent, LoaderContainer } from "./style";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
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
      <GlobalStyle />
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
      <Footer />
    </div>
  );
};

export default App;
