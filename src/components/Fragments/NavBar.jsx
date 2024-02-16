import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import FormSearch from "./FormSearch";

const NavBar = () => {
  return (
    <nav className="flex items-center py-8 px-8 justify-between gap-8">
      <img
        src="images/caridulu-logo-light.png"
        alt="Logo Caridulu"
        className="h-6 flex-none"
      />
      <FormSearch></FormSearch>

      <Button className="flex-none  ">
        <Link to="/login">Masuk</Link>
      </Button>
    </nav>
  );
};

export default NavBar;
