const Modal = (props) => {
  const { isOpen, onClose, children } = props;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50">
        <button
          className="absolute top-0 right-0 m-4 text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
