import React from 'react';

const GalleryItem = ({ url }) => {
  return (
    <div>
      <img src={url}></img>
    </div>
  );
}

export default GalleryItem;
