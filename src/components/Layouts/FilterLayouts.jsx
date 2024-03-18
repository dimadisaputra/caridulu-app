"use client";

import { Checkbox, Radio, Label, Rating as Star } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Button";
import TextPrice from "../Elements/TextPrice";
import Input from "../Elements/Input/Input";

const FilterLayouts = (props) => {
  const { children } = props;
  return <div className="flex flex-col gap-4 text-sm">{children}</div>;
};

const Compare = (props) => {
  const {
    compare,
    products,
    handleDeleteCompare,
    handleResetCompare,
    handleShowModal,
  } = props;
  return (
    <div>
      <p className="font-semibold py-2 text-gray-500">Bandingin</p>

      {compare.map((item) => {
        const product = products.find((product) => product.id === item.id);

        return (
          <div className="border rounded-lg shadow my-2 p-2" key={product.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs line-clamp-1 text-gray-700">
                  {product.name}
                </p>
                <TextPrice classname="text-xs line-clamp-1 text-red-500">
                  {product.price}
                </TextPrice>
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
          className={`bg-white rounded-lg px-3 text-sm border ${
            compare.length > 0
              ? "text-green-600 border-green-600"
              : "text-gray-400 pointer-events-none border-gray-400"
          }`}
          onClick={() => handleResetCompare()}
        >
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
      </div>
    </div>
  );
};

const Price = (props) => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = props;
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "-" || e.key === "e" || e.key === ".") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <p className="font-semibold py-2 text-gray-500">Harga</p>

      <div className="flex flex-col gap-2">
        <span className="flex items-center justify-between gap-2">
          <p>Rp.</p>
          <Input
            type={"number"}
            id={"minPrice"}
            placeholder={"Min. Harga"}
            min={"0"}
            value={minPrice}
            onChange={handleMinPriceChange}
            onKeyDown={handleKeyDown}
          />
        </span>
        <span className="flex items-center justify-between gap-2">
          <p>Rp.</p>
          <Input
            type="number"
            id="maxPrice"
            placeholder="Max. Harga"
            min="0"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            onKeyDown={handleKeyDown}
          />
        </span>
      </div>
    </div>
  );
};

const Marketplace = (props) => {
  const { marketplace, setMarketplace } = props;

  const handleMarketplaceChange = (e) => {
    const { id, checked } = e.target;
    setMarketplace({
      ...marketplace,
      [id]: checked,
    });
  };

  return (
    <div>
      <p className="font-semibold py-2 text-gray-500">Lokapasar</p>

      <div className="flex items-center gap-2">
        <Checkbox
          id="Shopee"
          checked={marketplace.Shopee}
          onChange={handleMarketplaceChange}
        />
        <Label htmlFor="Shopee">Shopee</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="Tokopedia"
          checked={marketplace.Tokopedia}
          onChange={handleMarketplaceChange}
        />
        <Label htmlFor="Tokopedia">Tokopedia</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="Lazada"
          checked={marketplace.Lazada}
          onChange={handleMarketplaceChange}
        />
        <Label htmlFor="Lazada">Lazada</Label>
      </div>
    </div>
  );
};

const Rating = (props) => {
  const { filterRating, setFilterRating } = props;

  const handleFilterRatingChange = (e) => {
    setFilterRating(Number(e.target.value));
  };
  return (
    <div>
      <p className="font-semibold py-2 text-gray-500">Rating</p>

      <div>
        <Star>
          <Radio
            id="rating5"
            name="rating"
            value="5"
            checked={filterRating === 5}
            onChange={handleFilterRatingChange}
          ></Radio>
          <Label className="flex mx-1" htmlFor="rating5">
            <Star.Star />
            <Star.Star />
            <Star.Star />
            <Star.Star />
            <Star.Star />
          </Label>
        </Star>
        <Star>
          <Radio
            id="rating4"
            name="rating"
            value="4"
            checked={filterRating === 4}
            onChange={handleFilterRatingChange}
          ></Radio>
          <Label className="flex mx-1" htmlFor="rating4">
            <Star.Star />
            <Star.Star />
            <Star.Star />
            <Star.Star />
            <Star.Star filled={false} className="text-gray-400" />
            <p className="mx-1">ke atas</p>
          </Label>
        </Star>
        <Star>
          <Radio
            id="rating3"
            name="rating"
            value="3"
            checked={filterRating === 3}
            onChange={handleFilterRatingChange}
          ></Radio>
          <Label className="flex mx-1" htmlFor="rating3">
            <Star.Star />
            <Star.Star />
            <Star.Star />
            <Star.Star filled={false} className="text-gray-400" />
            <Star.Star filled={false} className="text-gray-400" />
            <p className="mx-1">ke atas</p>
          </Label>
        </Star>
        <Star>
          <Radio
            id="rating2"
            name="rating"
            value="2"
            checked={filterRating === 2}
            onChange={handleFilterRatingChange}
          ></Radio>
          <Label className="flex mx-1" htmlFor="rating2">
            <Star.Star />
            <Star.Star />
            <Star.Star filled={false} className="text-gray-400" />
            <Star.Star filled={false} className="text-gray-400" />
            <Star.Star filled={false} className="text-gray-400" />
            <p className="mx-1">ke atas</p>
          </Label>
        </Star>
        <Star>
          <Radio
            id="rating1"
            name="rating"
            value="1"
            checked={filterRating === 1}
            onChange={handleFilterRatingChange}
          ></Radio>
          <Label className="flex mx-1" htmlFor="rating1">
            <Star.Star />
            <Star.Star filled={false} className="text-gray-400" />
            <Star.Star filled={false} className="text-gray-400" />
            <Star.Star filled={false} className="text-gray-400" />
            <Star.Star filled={false} className="text-gray-400" />
            <p className="mx-1">ke atas</p>
          </Label>
        </Star>
      </div>
    </div>
  );
};

FilterLayouts.Compare = Compare;
FilterLayouts.Price = Price;
FilterLayouts.Marketplace = Marketplace;
FilterLayouts.Rating = Rating;

export default FilterLayouts;
