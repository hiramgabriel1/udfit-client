import HeroProfile from "../../../shared/components/HeroProfile";
import PatientData from "../components/PatientData";
// import { profileData } from "../services/patient.service";
import Footer from "../../dashboard/components/Footer";

function PatientDataPage() {
  // const profile = await profileData()
  return (
    <>
      <HeroProfile />
      <PatientData />
      <Footer />
    </>
  );
}

export default PatientDataPage;
