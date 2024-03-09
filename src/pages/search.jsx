import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { searchProducts } from "../services/searchProducts.service";
import { Dropdown } from "flowbite-react";
import NavBar from "../components/Fragments/NavBar";
import Toast from "../components/Fragments/Toast";
import CompareLayouts from "../components/Layouts/CompareLayouts";
import ProductsLayouts from "../components/Layouts/ProductsLayouts";
import FilterLayouts from "../components/Layouts/FilterLayouts";

const SearchPage = () => {
  const [compare, setCompare] = useState([]);
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [marketplace, setMarketplace] = useState({
    Shopee: true,
    Tokopedia: true,
    Lazada: true,
  });
  const [filterRating, setFilterRating] = useState(0);
  const [sortOption, setSortOption] = useState("Relevansi");
  const dataFetchedRef = useRef(false);
  let location = useLocation();

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
        </FilterLayouts>
        <div className="w-9/12">
          <div className="flex justify-end text-gray-700 text-sm font-semibold pb-4 gap-1">
            <p className="font-normal text-gray-500">Urutkan:</p>
            <Dropdown label={sortOption} inline>
              <Dropdown.Item
                onClick={() => handleSortOptionChange("Relevansi")}
              >
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
