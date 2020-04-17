import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import GalleryItem from '../../components/gallery-item/gallery-item.jsx'

import { displayPhotos } from '../../images/photos/index.js'
import { photos } from '../../images/photos.js'

const MyGallery = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);


  const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let e
  return (
    <div>
      <h1>Gallery</h1>
      <Gallery photos={photos} direction={'row'} onClick={(event) => e = event.target.src}/>
      <GalleryItem url={e} />
    </div>
  );
}

export default MyGallery;
