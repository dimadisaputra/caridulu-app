import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Elements/Button";
import TextPrice from "../Elements/TextPrice";
import Input from "../Elements/Input/Input";

const FilterLayouts = (props) => {
  const { children } = props;
  return (
    <div className="w-3/12">
      <span className="flex items-center gap-2">
        <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
        <h5 className="font-semibold text-l text-gray-500 py-2">Filter</h5>
      </span>
      <div className="flex flex-col gap-4 p-4 text-sm">{children}</div>
    </div>
  );
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
            placeholder={"0"}
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
            placeholder="0"
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
  return(
    <div>
      <Input type="checkbox" id="shopee" placeholder="Shopee"></Input>
      <input type="checkbox" name="Shopee" id="Shopee" />
      <p>Test</p>
    </div>
  )
}

FilterLayouts.Compare = Compare;
FilterLayouts.Price = Price;
FilterLayouts.Marketplace = Marketplace;

export default FilterLayouts;
