import React, { useState, useEffect, useReducer } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Header from "./Header";
import ImageList from "./ImageList";
import PageButtons from "./PageButtons";
import ErrorBox from "./ErrorBox";
import imageGetter from "../api/imageGetter";
import "./App.css";

const initialState = {
  images: [],
  term: "istanbul",
  collection: 0,
  page: 1,
  total_pages: 1
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PARAMS":
      return {
        ...state,
        term: action.payload.term,
        collection: action.payload.collection
      };
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload.images,
        total_pages: action.payload.total_pages
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page
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

    const [data, e] = await imageGetter(
      state.term,
      state.collection,
      state.page,
      setError
    );
    if (e) {
      setError(e);
    } else {
      const { results, total_pages } = data;
      dispatch({
        type: "SET_IMAGES",
        payload: { images: results, total_pages }
      });
      if (results.length === 0) setError("No result has been found");
    }

    setLoading(false);
  };

  // triggers on form submit
  useEffect(() => {
    if (state.page === 1) {
      // when already in first page, setting page does not trigger second useEffect
      onSearchSubmit();
    } else {
      // setPage(1); // this triggers the other useEffect's onSearchSubmit
    }
  }, [state.term, state.collection]);

  //trigger on page change
  useEffect(() => {
    onSearchSubmit();
  }, [state.page]);

  return (
    <div className="App">
      <div className="navbar">
        <Header state={state} dispatch={dispatch} />
      </div>
      <div className="content">
        {loading ? (
          <div className="loader-container">
            <ClipLoader />
          </div>
        ) : null}
        {error !== "" && !loading ? <ErrorBox errorMessage={error} /> : null}
        {!loading && error === "" ? (
          <>
            <ImageList images={state.images} />
            <PageButtons state={state} dispatch={dispatch} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
