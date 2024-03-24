import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TextPrice from "../Elements/TextPrice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="bg-white border rounded-lg hover:shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, height = "h-40" } = props;
  return (
    <a href={image}>
      <img
        src={image}
        alt="Product Image"
        className={`rounded-t-lg object-cover w-full ${height}`}
        loading="lazy"
      />
    </a>
  );
};

const Body = (props) => {
  const { name, url } = props;
  return (
    <div className="px-4 pt-2">
      <a href={url}>
        <h5 className="tracking-thight text-sm line-clamp-2">{name}</h5>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const {
    handleAddToCompare,
    id,
    price,
    marketplace,
    rating,
    sold,
    location,
    showButton = false,
  } = props;
  return (
    <>
      <div className="px-4 py-2 flex flex-col gap-1">
        <TextPrice classname="font-semibold text-red-600 text-sm">
          {price}
        </TextPrice>

        <div className="mt-2">
          {marketplace === "Tokopedia" && (
            <img
              src="images/tokopedia-logo.png"
              alt="Tokopedia Logo"
              className="h-4"
            />
          )}

          {marketplace === "Lazada" && (
            <img
              src="images/lazada-logo.png"
              alt="Lazada Logo"
              className="h-4"
            />
          )}

          {marketplace === "Shopee" && (
            <img
              src="images/shopee-logo.png"
              alt="Shopee Logo"
              className="h-4"
            />
          )}
        </div>
        <div className="flex items-center text-xs gap-1">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
          <span>
            {rating} | {sold}+ Terjual
          </span>
        </div>
        <p className="text-xs">{ location ? (location.toUpperCase()) : "-"}</p>
      </div>
      {showButton && (
        <div>
          <button
            className="text-sm text-white w-full bg-green-600 hover:bg-green-700 rounded-b-lg font-semibold p-2"
            onClick={() => handleAddToCompare(id)}
          >
            Bandingin
          </button>
        </div>
      )}
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
