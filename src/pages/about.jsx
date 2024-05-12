import NavBar from "../components/Fragments/NavBar";
import AboutLayouts from "../components/Layouts/AboutLayouts";
import { useLogin } from "../hooks/useLogin";

const AboutPage = () => {
  const { fullName, email, role } = useLogin(true);

  return (
    <div>
      <NavBar fullName={fullName} email={email} role={role}></NavBar>

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
