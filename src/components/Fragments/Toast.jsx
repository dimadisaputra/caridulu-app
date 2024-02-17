import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Toast = (props) => {
  const { type, message } = props;
  return (
    <>
    {
        type === "warning" && (
            <div className="bg-white p-4 m-4 rounded-lg shadow text-sm text-gray-700 fixed top-5 right-5 flex gap-2 items-center border border-yellow-500">
                <FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-500 text-xl"/>
                <p>{message}</p>
            </div>
        )
    }
    </>
  );
};

export default Toast;
