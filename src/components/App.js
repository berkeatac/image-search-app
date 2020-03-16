import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Header from "./Header";
import ImageList from "./ImageList";
import PageButtons from "./PageButtons";
import ErrorBox from "./ErrorBox";
import imageGetter from "../api/imageGetter";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("istanbul");
  const [collection, setCollection] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async () => {
    setError("");
    setLoading(true);

    const [{ results, total_pages }, e] = await imageGetter(
      term,
      collection,
      page,
      setError
    );
    if (e) {
      setError(e);
    } else {
      setImages(results);
      setTotalPages(total_pages);
      if (results.length === 0) setError("No result has been found");
    }

    setLoading(false);
  };

  // triggers on form submit
  useEffect(() => {
    if (page === 1) {
      // when already in first page, setting page does not trigger second useEffect
      onSearchSubmit();
    } else {
      setPage(1); // this triggers the other useEffect's onSearchSubmit
    }
  }, [term, collection]);

  //trigger on page change
  useEffect(() => {
    onSearchSubmit();
  }, [page]);

  return (
    <div className="App">
      <div className="navbar">
        <Header setTerm={setTerm} setCollection={setCollection} />
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
            <ImageList images={images} />
            <PageButtons
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
