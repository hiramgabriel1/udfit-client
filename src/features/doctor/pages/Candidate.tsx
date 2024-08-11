import Patientlist from "../components/Patientlist";
import PatientInfo from "../components/PatientInfo";
import { renderMyPatients } from "../services/doctor.services";
import { useEffect } from "react";

function ListCandidate() {
  useEffect(() => {
    const getDataDoctor = async () => {
      const data = await renderMyPatients();
      if (data) {
        console.log(data);
      } else {
        console.error("No se pudieron obtener los datos del doctor.");
      }
    };

    getDataDoctor();
  }, []);
  
  return (
    <>
      <PatientInfo />
      <Patientlist />
    </>
  );
}

export default ListCandidate;
