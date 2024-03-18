import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { searchProducts } from "../services/searchProducts.service";
import { Button, Dropdown } from "flowbite-react";
import NavBar from "../components/Fragments/NavBar";
import Toast from "../components/Fragments/Toast";
import CompareLayouts from "../components/Layouts/CompareLayouts";
import ProductsLayouts from "../components/Layouts/ProductsLayouts";
import FilterLayouts from "../components/Layouts/FilterLayouts";
import { useLogin } from "../hooks/useLogin";
// import dummyProducts from "/home/dimadisaputra/dimadisaputra/dummy-data/response_1709215727483.json";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchPage = () => {
  const [compare, setCompare] = useState([]);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [marketplace, setMarketplace] = useState({
    Shopee: true,
    Tokopedia: true,
    Lazada: true,
  });
  const [filterRating, setFilterRating] = useState(0);
  const [sortOption, setSortOption] = useState("Relevansi");
  const [showFilter, setShowFilter] = useState(false);
  const dataFetchedRef = useRef(false);
  const { fullName, email } = useLogin(true);
  const location = useLocation();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    searchProducts(location.search, (data) => {
      setProducts(data.products);
    });
  }, []);

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  useEffect(() => {
    if (products) {
      let filteredProducts = products.filter(filterProducts);

      if (sortOption === "Rating") {
        filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
      } else if (sortOption === "Terjual") {
        filteredProducts = filteredProducts.sort((a, b) => b.sold - a.sold);
      } else if (sortOption === "Harga Tertinggi") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === "Harga Terendah") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      }
      setProductsFiltered(filteredProducts);
    }
  }, [minPrice, maxPrice, marketplace, filterRating, sortOption]);

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

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
    console.log(showFilter);
  };

  const filterProducts = (product) => {
    const productPrice = product.price;
    const productMarketplace = product.marketplace;
    const productRating = product.rating;

    const priceFilter =
      (minPrice === "" || productPrice >= minPrice) &&
      (maxPrice === "" || productPrice <= maxPrice);

    const marketplaceFilter =
      marketplace[productMarketplace] ||
      Object.values(marketplace).every(Boolean);

    const ratingFilter =
      filterRating === 0 ? productRating >= 0 : productRating >= filterRating;

    return priceFilter && marketplaceFilter && ratingFilter;
  };

  return (
    <>
      <NavBar fullName={fullName} email={email}></NavBar>
      <div>{toast && <Toast message={toast.message} type={toast.type} />}</div>
      <CompareLayouts
        products={products}
        compare={compare}
        modal={modal}
        handleCloseModal={handleCloseModal}
      />

      <div className="flex justify-between items-center px-4 md:px-8">
        <span
          className="flex items-center gap-2 text-sm md:text-l cursor-pointer"
          onClick={toggleShowFilter}
        >
          <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
          <p className="font-semibold text-gray-500 py-2">Filter</p>
        </span>
        <div className="flex text-gray-700 text-sm font-semibold gap-1">
          <p className="font-normal text-gray-500">Urutkan:</p>
          <Dropdown label={sortOption} inline>
            <Dropdown.Item onClick={() => handleSortOptionChange("Relevansi")}>
              Relevansi
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortOptionChange("Rating")}>
              Rating
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortOptionChange("Terjual")}>
              Terjual
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSortOptionChange("Harga Tertinggi")}
            >
              Harga Tertinggi
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSortOptionChange("Harga Terendah")}
            >
              Harga Terendah
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="flex px-4 md:px-8 py-2">
        <div
          className={`${
            showFilter ? "absolute md:relative top-0 left-0" : "hidden md:block"
          } w-full md:w-4/12 lg:w-3/12 md:right-0 md:top-0 z-10 bg-white md:bg-transparent border md:border-none p-4 md:p-0`}
        >
          <FilterLayouts>
            <div className="max-h-full overflow-y-auto">
              <FilterLayouts.Compare
                compare={compare}
                products={products}
                handleDeleteCompare={handleDeleteCompare}
                handleResetCompare={handleResetCompare}
                handleShowModal={handleShowModal}
              />
              <FilterLayouts.Price
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
              <FilterLayouts.Rating
                filterRating={filterRating}
                setFilterRating={setFilterRating}
              />
              <FilterLayouts.Marketplace
                marketplace={marketplace}
                setMarketplace={setMarketplace}
              />
            </div>
            <Button color="success" onClick={toggleShowFilter} className="md:hidden">
              Terapkan
            </Button>
          </FilterLayouts>
        </div>

        <div className="w-full md:w-8/12 lg:w-9/12">
          <ProductsLayouts
            products={productsFiltered}
            handleAddToCompare={handleAddToCompare}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
