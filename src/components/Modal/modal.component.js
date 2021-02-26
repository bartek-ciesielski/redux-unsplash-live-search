import React, { useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
  const { closeModal } = props;

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const closeIcon = () => (
    <FontAwesomeIcon
      className="close-icon"
      fixedWidth
      icon={faTimes}
      size="sm"
      onClick={closeModal}
    />
  );

  return (
    <div className="overlay">
      <div className="content">
        {closeIcon()}
        <div className="modalHeader">{props.headerContent} </div>
        <div className="modalContent"> {props.children}</div>
        <div className="modalFooter">{props.footerContent}</div>
      </div>
    </div>
  );
};

export default Modal;
