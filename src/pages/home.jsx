import NavBar from "../components/Fragments/NavBar";
import FormSearch from "../components/Fragments/FormSearch";
import AboutLayouts from "../components/Layouts/AboutLayouts";
import FooterFrag from "../components/Fragments/FooterFrag";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const HomePage = () => {
  const { fullName, email } = useLogin(true);
  return (
    <>
      <header>
        <NavBar fullName={fullName} email ={email}></NavBar>
      </header>
      <main className="flex flex-col items-center justify-center gap-8 py-8 px-8">
        <div className="w-full flex justify-around items-center">
          <div>
            <div>
              {" "}
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-700">
                  Cari apa yang mau kamu beli
                </p>
                <div className="text-4xl font-bold">
                  <span className="text-green-500 text-5xl">
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
              <div className="flex justify-around p-8 items-center">
                <Link to={"http://shopee.co.id"}>
                  <img
                    src="images/shopee-logo-lg.png"
                    alt="Logo Shopee"
                    className="max-h-6"
                  />
                </Link>

                <Link to={"http://tokopedia.com"}>
                  <img
                    src="images/tokopedia-logo-lg.png"
                    alt="Logo Tokopedia"
                    className="max-h-6"
                  />
                </Link>
                <Link to={"http://lazada.co.id"}>
                  {" "}
                  <img
                    src="images/lazada-logo-lg.png"
                    alt="Logo Lazada"
                    className="max-h-6"
                  />
                </Link>
              </div>
            </div>
          </div>
          <img
            src="images/gambar-cari-produk.png"
            alt="Gambar Cari Produk"
            className="h-96 p-2"
          />
        </div>
        <div className="w-full p-8 mt-12">
          <p className="text-2xl font-bold text-gray-700 py-6">
            Tentang Caridulu
          </p>
          <AboutLayouts></AboutLayouts>
        </div>
      </main>
      <footer>
        <FooterFrag></FooterFrag>
      </footer>
    </>
  );
};

export default HomePage;
