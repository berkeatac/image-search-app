import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("istanbul");
  const [collection, setCollection] = useState(0);
  const [page, setPage] = useState(1);

  return <div>Image Search App</div>;
};

export default App;
