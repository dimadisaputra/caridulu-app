import NavBar from "../components/Fragments/NavBar";
import data from "/home/dimadisaputra/dimadisaputra/dummy-data/search.json";
import Toast from "../components/Fragments/Toast";
import CompareLayouts from "../components/Layouts/CompareLayouts";
import ProductsLayouts from "../components/Layouts/ProductsLayouts";
import FilterLayouts from "../components/Layouts/FilterLayouts";
import { useState } from "react";

const products = data.products;

const SearchPage = () => {
  const [compare, setCompare] = useState([]);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  const filterProductsByPrice = (product) => {
    const price = product.price;
    if (
      (minPrice === "" || price >= minPrice) &&
      (maxPrice === "" || price <= maxPrice)
    ) {
      return true;
    }
    return false;
  };

  const filteredProducts = products.filter(filterProductsByPrice);

  return (
    <>
      <NavBar />
      <div>{toast && <Toast message={toast.message} type={toast.type} />}</div>
      <CompareLayouts
        products={products}
        compare={compare}
        modal={modal}
        handleCloseModal={handleCloseModal}
      />

      <div className="flex px-8 py-2">
        <FilterLayouts>
          <FilterLayouts.Price
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          {/* <FilterLayouts.Marketplace/> */}
          <FilterLayouts.Compare
            compare={compare}
            products={products}
            handleDeleteCompare={handleDeleteCompare}
            handleResetCompare={handleResetCompare}
            handleShowModal={handleShowModal}
          />
        </FilterLayouts>
        <ProductsLayouts
          products={filteredProducts}
          handleAddToCompare={handleAddToCompare}
        />
      </div>
    </>
  );
};

export default SearchPage;
