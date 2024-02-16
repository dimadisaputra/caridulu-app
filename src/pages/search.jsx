import CardProduct from "../components/Fragments/CardProduct";
import NavBar from "../components/Fragments/NavBar";

const SearchPage = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5 gap-4 px-4 py-4">
        <CardProduct>
          <CardProduct.Header image="/images/dummy-image.jpg" />
          <CardProduct.Body
            title="Jaket Parka Pria Wanita Premium Murah Berkualitas - ARMY, L"
            url="#"
            price="Rp. 77.500"
            marketplace="Tokopedia"
            rating="4.9"
            sold="250"
            location="KAB. BOGOR"
          />
          <CardProduct.Footer />
        </CardProduct>
      </div>
    </>
  );
};

export default SearchPage;
