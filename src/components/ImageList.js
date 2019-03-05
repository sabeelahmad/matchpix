import React from "react";

const ImageList = props => {
  /* We will map each image to a component */
  const images = props.images.map(image => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
