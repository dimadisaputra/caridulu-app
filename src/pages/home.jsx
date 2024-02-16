import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../components/Elements/SearchInput";

const HomePage = (props) => {
  return (
    <>
      <header>
        <nav className="justify-items-end grid items-center py-8 px-8">
          <div>
            <Button>
              <Link to="/login">Masuk</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center gap-8 py-8 px-8">
        <div className="w-full max-w-xl">
          <div className="px-4 py-8">
            <img
              src="images/caridulu-logo-light.png"
              alt="Caridulu Logo"
            />
          </div>
          <form action="">
            <div className="relative">
              <Input type="text" placeholder="Cari Produkmu disini" id="search"></Input>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-500"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default HomePage;
