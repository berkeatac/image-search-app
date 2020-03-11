import React, { useState, useEffect } from "react";

import Header from "./Header";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("istanbul");
  const [collection, setCollection] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <div className="navbar">
        <Header setTerm={setTerm} setCollection={setCollection} />
      </div>
    </div>
  );
};

export default App;
