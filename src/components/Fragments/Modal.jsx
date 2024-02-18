import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const { isOpen, onClose, children } = props;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50 w-full max-w-screen-md relative">
        <button
          className="absolute top-0 right-0 m-4 rounded-lg py-2 px-4 text-gray-500 text-md hover:text-white hover:bg-green-600 "
          onClick={onClose}
        >
          <FontAwesomeIcon
            icon={faXmark}
          />
        </button>
        <div className="modal-content grid grid-cols-2 gap-4 mt-12">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
