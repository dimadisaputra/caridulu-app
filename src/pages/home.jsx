import NavBar from "../components/Fragments/NavBar";
import FormSearch from "../components/Fragments/FormSearch";

const HomePage = (props) => {
  return (
    <>
      {/* <header>
        <NavBar></NavBar>
      </header> */}

      <main className="flex flex-col items-center justify-center gap-8 py-8 px-8">
        <div className="w-full max-w-xl">
          <div className="px-4 py-8">
            <img
              src="images/caridulu-logo-light.png"
              alt="Caridulu Logo"
            />
          </div>
          <FormSearch></FormSearch>
        </div>
      </main>
    </>
  );
};

export default HomePage;
