import React from 'react';
import './index.css';

function PhotoCard({ photo }) {
  return (
    <li className="photo-card">
      <img
        className="photo"
        src={photo.urls.regular}
        alt={photo.description || ''}
      />
    </li>
  );
}

export default PhotoCard;
