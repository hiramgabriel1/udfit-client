function PatientInfo() {
  return (
    <>
      <section className="bg-color-primary container">
        <div className="text-white flex justify-center text-center items-center">
          <h3 className="bg-color-secondary-light px-16 rounded-lg py-2">
            Pacientes
          </h3>
        </div>
        <div className="container">
          <div className="font-bold text-lg xl:text-2xl py-3 text-center lg:text-start">
            <h2 className="border border-t-0 border-l-0 border-r-0 border-b-color-secondary pb-2 ">
              Numero de pacientes: 3{/* {pacientes} */}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default PatientInfo;
