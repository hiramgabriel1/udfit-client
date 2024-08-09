import salad from "../../../assets/images/salad.png";
import Daycard from "./Daycard";


function Patientdiet() {
  return (
    <>
    <section>
      <div className="container">
        <div className="flex justify-center py-8 ">
          <button className="bg-color-secondary-light text-white rounded-xl px-10 font-semibold text-sm lg:text-2xl lg:rounded-3xl lg:py-1 lg:px-12">
            DIETA
          </button>
        </div>

        <div>
          <div className="lg:flex lg:justify-center">
            <div className="flex items-center justify-around bg-color-primary-orange rounded-xl lg:w-[70%]">
              <div className="">
                <img src={salad} className="w-36 h-25 lg:w-[35%]" />
              </div>
              <div className="text-center mr-5">
                <h2 className="font-principal text-white text-2xl lg:text-4xl">LUNES</h2>
              </div>
            </div>
          </div>
          <Daycard />

          <div className="py-10 space-y-3">
            <div className="lg:flex lg:justify-center">
              <div className="flex items-center justify-around bg-color-primary-orange rounded-xl lg:w-[70%] ">
                <div className="">
                  <img src={salad} className="w-36 h-25 lg:w-[35%]" />
                </div>
                <div className="text-center mr-5">
                  <h2 className="font-principal text-white text-2xl lg:text-4xl">
                    MARTES
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:justify-center">
              <div className="flex items-center justify-around bg-color-primary-orange rounded-xl lg:w-[70%]">
                <div className="">
                  <img src={salad} className="w-36 h-25 lg:w-[35%]" />
                </div>
                <div className="text-center mr-5">
                  <h2 className="font-principal text-white text-2xl lg:text-4xl">
                    MIERCOLES
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:justify-center">
              <div className="flex items-center justify-around bg-color-primary-orange rounded-xl lg:w-[70%]">
                <div className="">
                  <img src={salad} className="w-36 h-25 lg:w-[35%]" />
                </div>
                <div className="text-center mr-5">
                  <h2 className="font-principal text-white text-2xl lg:text-4xl">
                    JUEVES
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:justify-center">
              <div className="flex items-center justify-around bg-color-primary-orange rounded-xl lg:w-[70%]">
                <div className="">
                  <img src={salad} className="w-36 h-25 lg:w-[35%]" />
                </div>
                <div className="text-center mr-5">
                  <h2 className="font-principal text-white text-2xl lg:text-4xl">
                    VIERNES
                  </h2>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:justify-center">
              <div className="flex items-center justify-around bg-color-primary-orange rounded-xl lg:w-[70%]">
                <div className="">
                  <img src={salad} className="w-36 h-25 lg:w-[35%]" />
                </div>
                <div className="text-center mr-5">
                  <h2 className="font-principal text-white text-2xl lg:text-4xl">
                    SABADO
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Patientdiet