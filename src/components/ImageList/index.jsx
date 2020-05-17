import React from "react";
import PropTypes from "prop-types";

import { ListImage, ImageListContainer } from "./style";

const ImageList = ({ images }) => {
  const items = images.map((img) => {
    const height = img.height * (300 / img.width);
    return (
      <div
        style={{ gridRowEnd: `span ${Math.ceil(height / 10) + 2}` }}
        key={img.id}
      >
        <a href={img.links.html} target="_blank" rel="noopener noreferrer">
          <ListImage
            src={img.urls.small}
            alt={img.alt_description}
            data-cy="image-item"
          />
        </a>
      </div>
    );
  });

  return (
    <ImageListContainer data-cy="image-list">
      {images && items}
    </ImageListContainer>
  );
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
