import PropTypes from "prop-types";
import "./modal.css";
import { useEffect } from "react";

const PetInfoModal = ({ isOpen, onClose, data }) => {
  const handleToggle = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleToggle);
    return () => {
      document.removeEventListener("keydown", handleToggle);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          ×
        </button>
        <h2>Выбранные данные</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

PetInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default PetInfoModal;
