import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import BasicWindow from './BasicModalWindow';
import CloseIcon from '@mui/icons-material/Close';

const BasicModalWindow = ({ children, toggleModal }) => {
  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    document.addEventListener('keydown', closeESC);
    return () => {
      document.removeEventListener('keydown', closeESC);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleClickBackground = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modal = (
    <BasicWindow onClick={handleClickBackground}>
      <div className="wrapper-modal">
        <button className="modal-btn-close" onClick={() => toggleModal()}>
          <CloseIcon className="modal-close-icon" />
        </button>
        {children}
      </div>
    </BasicWindow>
  );

  return createPortal(modal, document.body);
};

export default BasicModalWindow;
