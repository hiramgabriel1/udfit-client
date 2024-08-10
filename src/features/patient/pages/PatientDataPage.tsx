import HeroProfile from "../../../shared/components/HeroProfile";
import PatientData from "../components/PatientData";
import { profileData } from "../services/patient.service";

function PatientDataPage() {
  // const profile = await profileData()
  return (
    <>
      <HeroProfile />
      <PatientData />
    </>
  );
}

export default PatientDataPage;
