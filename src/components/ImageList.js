import React from "react";
import Masonry from "react-masonry-component";

import "./ImageList.css";

const ImageList = ({ images }) => {
  const masonryOptions = {
    isFitWidth: true,
    transitionDuration: "0.10s" // no transition duration may cause bugs
  };

  const items = images.map(img => {
    const height = img.height * (300 / img.width);
    return (
      <img
        key={img.id}
        src={img.urls.small}
        alt={img.alt_description}
        className="list-image"
        // Workaround to disable inital animation by setting height before image load
        style={{ height: `${height}px` }}
        onClick={() => window.open(img.links.html, "_blank")}
      ></img>
    );
  });

  return <Masonry options={masonryOptions}>{images ? items : ""}</Masonry>;
};

export default ImageList;
