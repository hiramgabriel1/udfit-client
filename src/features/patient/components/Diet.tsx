import salad from "../../../assets/images/salad.png";
import arrow_r from "../../../assets/images/arrow_r.png";
import arrow_l from "../../../assets/images/arrow_l.png";

function Diet() {
  return (
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
                <img src={salad} className="w-36 h-25 " />
              </div>
              <div className="text-center mr-5">
                <h2 className="font-principal text-white text-2xl">LUNES</h2>
                <span className="text-white text-xs">FECHA</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="pr-1">
              <button>
                <img src={arrow_r} />
              </button>
            </div>
            <div className="grid grid-cols-3 py-10 space-x-1">
              <div className="bg-color-primary rounded-lg">
                <div className="bg-color-secondary-light text-white rounded-lg text-center font-semibold text-sm px-2 py-2 lg:text-xl">
                  <p>DESAYUNO 8:00 am</p>
                  <p>POLLO CON ARROZ</p>
                </div>
                <div className="text-center pt-2 pb-8 px-2 text-xs lg:text-lg">
                  <p>100G arroz 2 piezas de pollo Espinacaz</p>
                </div>
              </div>

              <div className="bg-color-primary rounded-lg">
                <div className="bg-color-secondary-light text-white rounded-lg text-center font-semibold text-sm px-2 py-2 lg:text-xl">
                  <p>DESAYUNO 8:00 am</p>
                  <p>POLLO CON ARROZ</p>
                </div>
                <div className="text-center pt-2 pb-8 px-2 text-xs lg:text-lg">
                  <p>100G arroz 2 piezas de pollo Espinacaz</p>
                </div>
              </div>

              <div className="bg-color-primary rounded-lg">
                <div className="bg-color-secondary-light text-white rounded-lg text-center font-semibold text-sm px-2 py-2 lg:text-xl">
                  <p>DESAYUNO 8:00 am</p>
                  <p>POLLO CON ARROZ</p>
                </div>
                <div className="text-center pt-2 pb-8 px-2 text-xs lg:text-lg">
                  <p>100G arroz 2 piezas de pollo Espinacaz</p>
                </div>
              </div>
            </div>
            <div className="pl-1">
              <button>
                <img src={arrow_l} />
              </button>
            </div>
          </div>

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
  );
}

export default Diet;
