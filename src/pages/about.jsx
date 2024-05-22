import NavBar from "../components/Fragments/NavBar";
import AboutLayouts from "../components/Layouts/AboutLayouts";
import { useLogin } from "../hooks/useLogin";

const AboutPage = () => {
  const { fullName, email, role } = useLogin(true);

  return (
    <div>
      <NavBar fullName={fullName} email={email} role={role}></NavBar>

      <div className="px-8 flex justify-center items-center">
        <AboutLayouts></AboutLayouts>
      </div>
    </div>
  );
};

export default AboutPage;
