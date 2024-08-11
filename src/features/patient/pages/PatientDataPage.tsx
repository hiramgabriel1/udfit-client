import React, { useEffect, useState } from "react";
import HeroProfile from "../../../shared/components/HeroProfile";
import PatientData from "../components/PatientData";
import { profileData } from "../services/patient.service";
import type { IPatient } from "../../../types/user.types";

const PatientDataPage: React.FC = () => {
  const [profile, setProfileData] = useState<IPatient>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const queryProfile = async () => {
      try {
        const queryUserData = await profileData();
        setProfileData(queryUserData.data)
        
        console.log(queryUserData)
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    queryProfile();
  }, []);

  useEffect(() => {
    console.log(profile);
  }, [profile])

  return (
    <>
      {/* <ToastContainer /> */}
      {isLoading && <p>Cargando datos... por favor espere.</p>}
      {profile ? (
        <div>
          <HeroProfile username={profile.username} />
          <PatientData profileData={profile} />
        </div>
      ) : error ? (
        <p>No se pudo cargar el perfil. Inténtelo de nuevo más tarde.</p>
      ) : null}
    </>
  );
};

export default PatientDataPage;
