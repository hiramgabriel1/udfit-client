import { useEffect, useState } from "react";
import type { IPatient } from "../../../types/user.types";

type IPatientDataProps = {
  profileData: IPatient;
};

function PatientData({ profileData }: IPatientDataProps) {
  const [imc, setImc] = useState<number>(0);
  const [igc, setIgc] = useState<number>(0);

  console.log(profileData);
  const analytics = () => {
    const calculatedImc =
      profileData.weight / (profileData.height * profileData.height);
    setImc(calculatedImc);

    const calculatedIgc =
      profileData.gender === "hombre"
        ? 1.2 * calculatedImc + 0.23 * profileData.age - 16.2
        : 1.2 * calculatedImc + 0.23 * profileData.age - 5.4
        
    setIgc(calculatedIgc);
  };
  useEffect(() => {
    analytics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData]);

  useEffect(() => {
    console.log("imc: ", imc);
    console.log("igc: ", igc);
  }, [imc, igc]);
  return (
    <section className="py-9">
      <div className="container">
        <div className="flex justify-center py-8 ">
          <button className="bg-color-secondary-light text-white rounded-xl px-10 font-semibold text-sm lg:text-2xl lg:rounded-3xl lg:py-1 lg:px-12 md:text-2xl md:rounded-2xl">
            Mis Datos
          </button>
        </div>

        <div className="flex justify-center py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:w-[55%] lg:gap-6 md:w-[75%]">
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl md:rounded-2xl ">
                <h1 className="text-white lg:text-3xl md:text-2xl">Peso</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                <span>{profileData ? profileData.weight : "Error"}</span>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                <h1 className="text-white lg:text-3xl md:text-2xl">IMC</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                <span>{imc}</span>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                <h1 className="text-white lg:text-3xl md:text-2xl">Estatura</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                <span>{profileData ? profileData.height : "Error"}</span>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                <h1 className="text-white lg:text-3xl md:text-2xl">IGC</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                <span>{igc}%</span>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl px-3">
                <h1 className="text-white lg:text-3xl md:text-2xl">
                  Calorías por día
                </h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                <span>1800 kcal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientData;
