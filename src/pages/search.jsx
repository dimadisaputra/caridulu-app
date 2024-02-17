import CardProduct from "../components/Fragments/CardProduct";
import NavBar from "../components/Fragments/NavBar";
import data from "/home/dimas/Documents/search.json";
import Button from "../components/Elements/Button";
import Price from "../components/Elements/Price";
import Toast from "../components/Fragments/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../components/Fragments/Modal";

const products = data.products;

const SearchPage = () => {
  const [compare, setCompare] = useState([]);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(false);

  const handleAddToCompare = (id) => {
    const isAlreadyAdded = compare.some((item) => item.id === id);

    if (compare.length >= 2) {
      handleShowToast("warning", "Maaf, cuman bisa bandingin 2 produk aja!");
    } else if (isAlreadyAdded) {
      handleShowToast("warning", "Gak bisa bandingin produk yang sama ya :)");
    } else {
      setCompare([
        ...compare,
        {
          id,
        },
      ]);
    }
  };

  const handleDeleteCompare = (id) => {
    const updatedCompare = compare.filter((item) => item.id !== id);
    setCompare(updatedCompare);
  };

  const handleResetCompare = () => {
    setCompare([]);
  };

  const handleShowModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleShowToast = (type, message) => {
    setToast({
      type,
      message,
    });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <>
      <NavBar />
      <div>{toast && <Toast message={toast.message} type={toast.type} />}</div>
      <Modal isOpen={modal} onClose={() => handleCloseModal()}>
        {compare.map((item) => {
          const product = products.find((product) => product.id === item.id);
          return (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          );
        })}
      </Modal>
      <div className="flex px-8 py-2">
        <div className="w-3/12">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
            <h5 className="font-semibold text-l text-gray-500 py-2">Filter</h5>
          </span>

          <div className="border rounded-lg p-4">
            {compare.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );

              return (
                <div
                  className="border rounded-lg shadow my-2 p-2"
                  key={product.id}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs line-clamp-1 text-gray-700">
                        {product.name}
                      </p>
                      <Price classname="text-xs line-clamp-1 text-red-500">
                        {product.price}
                      </Price>
                    </div>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-gray-500 px-2 hover:cursor-pointer"
                      onClick={() => handleDeleteCompare(product.id)}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex gap-2">
              <Button
                classname={`w-full text-sm text-white ${
                  compare.length === 2
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 pointer-events-none"
                }`}
                onClick={() => handleShowModal()}
              >
                Bandingin ({compare.length})
              </Button>
              <button
                className="bg-white text-green-600 border border-green-600 rounded-lg px-3 text-sm"
                onClick={() => handleResetCompare()}
              >
                <FontAwesomeIcon icon={faArrowRotateRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-9/12 grid grid-cols-5 gap-4 ml-4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body
                name={product.name}
                url={product.url}
                price={product.price}
                marketplace={product.marketplace}
                rating={product.rating}
                sold={product.sold}
                location={product.location}
              />
              <CardProduct.Footer
                handleAddToCompare={handleAddToCompare}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
