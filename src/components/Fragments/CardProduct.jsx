import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="bg-white border rounded-lg hover:shadow">{children}</div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="Product Image" className="rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, url, price, marketplace, rating, sold, location } = props;
  return (
    <div className="px-2 py-2">
      <a href={url}>
        <h5 className="tracking-thight">{title}</h5>
      </a>
      <p className="font-semibold text-red-600">{price}</p>
      <p className="mt-2">{marketplace}</p>
      <div className="flex items-center text-sm">
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
        <span>
          {rating} | {sold}+ Terjual
        </span>
      </div>
      <p className="text-sm">{location}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <button className="text-sm text-white w-full bg-green-600 hover:bg-green-700 rounded-b-lg font-semibold p-2">
        Bandingin
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
