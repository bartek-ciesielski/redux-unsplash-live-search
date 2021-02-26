import React, { useState } from 'react';
import './index.css';
import PhotoCard from '../PhotoCard/photoCard.component';
import { connect } from 'react-redux';
import Loader from '../Loader/loader.component';
import Modal from '../Modal/modal.component';
import { ACTION_FETCH_MODAL_PHOTO_INIT } from '../../services/photosService/photosService';

function PhotoList({
  photos,
  isLoading,
  isError,
  fetchModalPhoto,
  modalPhoto,
}) {
  const [status, setStatus] = useState(false);

  const handleClick = (photo) => {
    setStatus(true);
    fetchModalPhoto(photo.id);
  };

  function renderModalPhoto() {
    return (
      status &&
      !isLoading &&
      !isError && (
        <Modal
          closeModal={() => setStatus(false)}
          headerContent={
            <a
              href={modalPhoto.user.links.html}
              rel="noopener noreferrer"
              target="_blank"
            >
              {modalPhoto.user.name}
            </a>
          }
          footerContent={modalPhoto.location.title}
        >
          <img
            className="modalPhoto"
            src={modalPhoto.urls.regular}
            alt={modalPhoto.description || ''}
          />
        </Modal>
      )
    );
  }

  return (
    <ul className="photos-container">
      {isError ? (
        <Modal closeModal={() => setStatus(false)}>
          Something went wrong!!! Try again later
        </Modal>
      ) : null}
      {isLoading ? <Loader /> : null}
      {renderModalPhoto()}
      {!photos.length && !isError && !isLoading && (
        <div className="no-results">SORRY, NO RESULTS MATCHING QUERY</div>
      )}
      {
        <div className="search-results">
          {photos.map((photo, i) => (
            <div
              style={{ cursor: 'pointer' }}
              key={i}
              onClick={() => handleClick(photo)}
            >
              <PhotoCard photo={photo} />
            </div>
          ))}
        </div>
      }
    </ul>
  );
}

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
  isLoading: state.photos.isLoading,
  isError: state.photos.isError,
  modalPhoto: state.photos.modalPhoto,
});
const mapDispatchToProps = (dispatch) => ({
  fetchModalPhoto: (photoId) =>
    dispatch(ACTION_FETCH_MODAL_PHOTO_INIT(photoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
