import React from "react";
import PropTypes from "prop-types";
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
      <a href={img.links.html} target="_blank">
        <img
          key={img.id}
          src={img.urls.small}
          alt={img.alt_description}
          className="list-image"
          // Workaround to disable inital animation by setting height before image load
          style={{ height: `${height}px` }}
        ></img>
      </a>
    );
  });

  return <Masonry options={masonryOptions}>{images ? items : ""}</Masonry>;
};

ImageList.propTypes = {
  images: PropTypes.array
};

export default ImageList;
