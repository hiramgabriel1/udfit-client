function PatientEdit() {
  return (
    <section className="py-9">
      <div className="container">
        <div className="flex justify-center py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:w-[55%] lg:gap-6 md:w-[75%]">
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl md:rounded-2xl ">
                <h1 className="text-white lg:text-3xl md:text-2xl">Peso</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                <input type="text" value={"75 kg"} className="text-center w-[75%]"></input>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                <h1 className="text-white lg:text-3xl md:text-2xl">IMC</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
              <input type="text" value={"15"} className="text-center w-[75%]"></input>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                <h1 className="text-white lg:text-3xl md:text-2xl">Estatura</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
              <input type="text" value={"1.65 cm"} className="text-center w-[75%]"></input>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                <h1 className="text-white lg:text-3xl md:text-2xl">IGC</h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
              <input type="text" value={"16%"} className="text-center w-[75%]"></input>
              </div>
            </div>
            <div className="rounded-xl">
              <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl px-3">
                <h1 className="text-white lg:text-3xl md:text-2xl">
                  Calorías por día
                </h1>
              </div>
              <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
              <input type="text" value={"1800 kcal"} className="text-center w-[75%]"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-color-secondary-light text-white rounded-xl px-10 font-semibold text-sm lg:text-2xl lg:rounded-3xl lg:py-1 lg:px-12 md:text-2xl md:rounded-2xl">
            Editar Kcal por día
          </button>
        </div>
      </div>
    </section>
  );
}

export default PatientEdit;
