import CardProduct from "../components/Fragments/CardProduct";
import NavBar from "../components/Fragments/NavBar";
import data from "/home/dimas/Documents/search.json";
import Button from "../components/Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const products = data.products;

const SearchPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex px-8 py-2">
        <div className="w-2/12">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
            <h5 className="font-semibold text-l text-gray-500 py-2">Filter</h5>
          </span>
          <div className="border rounded-lg p-4">
            <Button classname="w-full text-sm text-white bg-green-600 hover:bg-green-700">
              Bandingin ({0})
            </Button>
          </div>
        </div>
        <div className="w-10/12 grid grid-cols-5 gap-4 ml-4">
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
              <CardProduct.Footer />
            </CardProduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
