import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from '../../images/photos.js'

const myGallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <Gallery photos={photos} direction={'column'}/>
    </div>
  );
}

export default myGallery;
