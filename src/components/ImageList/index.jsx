import React from "react";
import PropTypes from "prop-types";

import "./ImageList.css";

const ImageList = ({ images }) => {
  const items = images.map(img => {
    const height = img.height * (300 / img.width);
    return (
      <div
        style={{ gridRowEnd: `span ${Math.ceil(height / 10) + 2}` }}
        key={img.id}
      >
        <a href={img.links.html} target="_blank" rel="noopener noreferrer">
          <img
            src={img.urls.small}
            alt={img.alt_description}
            className="list-image"
          ></img>
        </a>
      </div>
    );
  });

  return <div className="image-list">{images && items}</div>;
};

ImageList.propTypes = {
  images: PropTypes.array
};

export default ImageList;
