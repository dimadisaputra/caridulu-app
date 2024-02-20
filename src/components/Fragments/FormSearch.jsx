import Input from "../Elements/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const FormSearch = () => {
  return (
    <div className="w-full">
      <form action="">
        <div className="relative grow">
          <Input
            type="text"
            placeholder="Cari Produkmu disini"
            id="search"
            classname="pr-10"
          ></Input>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSearch;
