 // CSS faylı import edilir

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete this post?</p>
        <div className="buttons">
          <button className="delete-btn" onClick={onDelete}>DELETE</button>
          <button className="cancel-btn" onClick={onClose}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
