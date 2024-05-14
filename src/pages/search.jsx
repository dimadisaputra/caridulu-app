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
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fuse from "fuse.js";
import { createHistory, createGuestHistory } from "../services/history.service";
import Pagination from "@mui/material/Pagination";

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
  const { fullName, email, role } = useLogin(true);
  const location = useLocation();
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsFiltered
    ? productsFiltered.slice(indexOfFirstProduct, indexOfLastProduct)
    : null;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordParam = params.get("keyword");
    if (keywordParam) {
      setKeyword(keywordParam);
    }
  }, []);

  useEffect(() => {
    if (showFilter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showFilter]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    searchProducts(location.search, (data) => {
      const productsRelevant = searchRelevant(data.products);
      console.log(productsRelevant);
      setProducts(productsRelevant.map((product) => product.item));
    });
  }, []);

  useEffect(() => {
    setProductsFiltered(products);

    if (products != null) {
      saveHistory();
    }
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
      setCurrentPage(1);
    }
  }, [minPrice, maxPrice, marketplace, filterRating, sortOption]);

  const searchRelevant = (list) => {
    const options = {
      includeScore: true,
      souldSort: true,
      keys: ["name"],
      threshold: 1.0,
    };

    const params = new URLSearchParams(window.location.search);
    const keyword = params.get("keyword");

    const fuse = new Fuse(list, options);

    return fuse.search(keyword);
  };

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

  const saveHistory = () => {
    const access_token = localStorage.getItem("access_token");

    const result_count = products ? products.length : 0;

    if (access_token) {
      createHistory(
        { keyword: keyword, result_count: result_count },
        (status, res) => {
          if (status) {
            console.log(res.data.message);
          } else {
            console.log(res);
          }
        }
      );
    } else {
      createGuestHistory(
        { keyword: keyword, result_count: result_count },
        (status, res) => {
          if (status) {
            console.log(res.data.message);
          } else {
            console.log(res);
          }
        }
      );
    }
  };

  return (
    <>
      <NavBar fullName={fullName} email={email} role={role}></NavBar>
      <div>{toast && <Toast message={toast.message} type={toast.type} />}</div>
      <CompareLayouts
        products={products}
        compare={compare}
        modal={modal}
        handleCloseModal={handleCloseModal}
      />

      <div className="flex justify-between items-center px-4 md:px-8 bg-white">
        <span
          className="flex items-center gap-2 text-sm md:text-l md:pointer-events-none"
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
            showFilter
              ? "absolute md:relative bottom-0 left-0 rounded-t-3xl"
              : "hidden md:block"
          } w-full md:w-4/12 lg:w-3/12 md:right-0 md:bottom-0 z-10 bg-white md:bg-transparent border md:border-none p-4 md:px-2`}
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
            <Button
              color="success"
              onClick={toggleShowFilter}
              className="md:hidden"
            >
              Terapkan
            </Button>
          </FilterLayouts>
        </div>

        <div className="w-full md:w-8/12 lg:w-9/12">
          <ProductsLayouts
            products={currentProducts}
            handleAddToCompare={handleAddToCompare}
          />
          <div className="flex justify-center mt-4">
            <Pagination
              count={
                productsFiltered
                  ? Math.ceil(productsFiltered.length / productsPerPage)
                  : 0
              }
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
