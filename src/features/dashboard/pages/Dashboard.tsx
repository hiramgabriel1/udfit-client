import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Question from "../components/Question";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface IPayloadCustomType extends JwtPayload {
  userId: string;
}
const token = localStorage.getItem("authToken");
const user = jwtDecode<IPayloadCustomType>(token || "");

console.log(user);

function Dashboard() {
  const [isDoctorPage, setIsDoctorPage] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isDoctorPage);
  }, [isDoctorPage]);

  useEffect(() => {
    if (isDoctorPage) {
      navigate(`/doctor/${user?.userId}/pacientes/lista`);
    }
  }, [isDoctorPage, navigate]);
  
  return (
    <>
      <Hero>
        <button className="btn" onClick={() => setIsDoctorPage(true)}>
          Profile page
        </button>
      </Hero>
      <About />
      <Question />
      <Footer />
    </>
  );
}

export default Dashboard;
