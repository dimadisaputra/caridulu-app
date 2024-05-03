import NavBar from "../components/Fragments/NavBar";
import AboutLayouts from "../components/Layouts/AboutLayouts";

const AboutPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="px-8">
        <p className="text-xl text-center font-semibold text-gray-700 py-8">
          Tentang Caridulu
        </p>
        <AboutLayouts></AboutLayouts>
      </div>
    </div>
  );
};

export default AboutPage;
