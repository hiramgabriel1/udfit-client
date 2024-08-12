function PatientData() {
  return (
    <section className="py-9 bg-color-primary-light">
      <div className="container">
        <div className="flex justify-center space-x-6 py-8">
          <a>
          <button className="bg-color-secondary-light text-white rounded-xl px-10 font-semibold text-sm lg:text-2xl lg:rounded-3xl lg:py-1 lg:px-12 md:text-2xl md:rounded-2xl">
            MIS DATOS
          </button>
          </a>
          <a>
          <button className="bg-color-primary text-white rounded-xl px-10 font-semibold text-sm lg:text-2xl lg:rounded-3xl lg:py-1 lg:px-12 md:text-2xl md:rounded-2xl">
            MI DIETA
          </button>
          </a>
        </div>
        <div>
          <div className=" bg-white flex justify-center py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:w-[55%] lg:gap-6 md:w-[75%]">
              <div className="rounded-xl">
                <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl md:rounded-2xl ">
                  <h1 className="text-white lg:text-3xl md:text-2xl">Peso</h1>
                </div>
                <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                  <span>75 KG</span>
                </div>
              </div>
              <div className="rounded-xl">
                <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                  <h1 className="text-white lg:text-3xl md:text-2xl">IMC</h1>
                </div>
                <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                  <span>15</span>
                </div>
              </div>
              <div className="rounded-xl">
                <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                  <h1 className="text-white lg:text-3xl md:text-2xl">
                    Estatura
                  </h1>
                </div>
                <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                  <span>1.63m</span>
                </div>
              </div>
              <div className="rounded-xl">
                <div className="bg-color-primary-orange flex justify-center font-semibold rounded-xl lg:rounded-2xl  md:rounded-2xl">
                  <h1 className="text-white lg:text-3xl md:text-2xl">IGC</h1>
                </div>
                <div className="flex justify-center text-sm py-2 font-bold lg:text-xl md:text-2xl">
                  <span>16%</span>
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
      </div>
    </section>
  );
}

export default PatientData;
