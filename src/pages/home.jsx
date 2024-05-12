import NavBar from "../components/Fragments/NavBar";
import FormSearch from "../components/Fragments/FormSearch";
import FooterFrag from "../components/Fragments/FooterFrag";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const HomePage = () => {
  const { fullName, email, role } = useLogin(true);
  return (
    <>
      <header>
        <NavBar fullName={fullName} email={email} role={role}></NavBar>
      </header>
      <main className="flex flex-col items-center justify-center gap-8 p-4 md:p-8">
        <div className="w-full flex justify-around items-center flex-col md:flex-row gap-2">
          <div>
            <div>
              {" "}
              <div className="mb-8 text-4xl font-bold text-center md:text-left">
                <p className="text-gray-700">Cari apa yang mau kamu beli</p>
                <div className="">
                  <span className="text-green-500 md:text-5xl">
                    Cuma sekali cari,
                  </span>
                  <span className="text-gray-700"> gak pake ribet!</span>
                </div>
              </div>
              <FormSearch></FormSearch>
            </div>
            <div className="mt-16 p-2">
              <p className="text-sm text-gray-400 text-center">
                Cari produk dari marketplace dibawah ini dalam sekali cari aja:
              </p>
              <div className="flex justify-around py-4 md:p-8 items-center flex-row gap-4">
                <Link to={"http://shopee.co.id"}>
                  <img
                    src="images/shopee-logo-lg.png"
                    alt="Logo Shopee"
                    className="md:max-w-28 max-w-16"
                  />
                </Link>

                <Link to={"http://tokopedia.com"}>
                  <img
                    src="images/tokopedia-logo-lg.png"
                    alt="Logo Tokopedia"
                    className="md:max-w-28 max-w-16"
                  />
                </Link>
                <Link to={"http://lazada.co.id"}>
                  {" "}
                  <img
                    src="images/lazada-logo-lg.png"
                    alt="Logo Lazada"
                    className="md:max-w-28 max-w-16"
                  />
                </Link>
              </div>
            </div>
          </div>
          <img
            src="images/gambar-cari-produk.png"
            alt="Gambar Cari Produk"
            className="h-96 p-2 hidden md:block"
          />
        </div>
      </main>
      {/* <footer>
        <FooterFrag></FooterFrag>
      </footer> */}
    </>
  );
};

export default HomePage;
