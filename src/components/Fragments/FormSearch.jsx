import Input from "../Elements/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { createHistory } from "../../services/history.service";

const FormSearch = (props) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordParam = params.get("keyword");
    if (keywordParam) {
      setKeyword(keywordParam);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!keyword) {
      return
    }

    if (location.pathname === "/search") {
      window.location.href = `?keyword=${keyword}`;
    } else {
      window.location.href = `/search?keyword=${keyword}`;
    }
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative grow">
          <Input
            type="text"
            placeholder={!keyword ? "Cari Produkmu disini" : keyword}
            id="search"
            classname="pr-10"
            onChange={handleChange}
          ></Input>
          <div
            className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
            onClick={handleSubmit}
          >
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
