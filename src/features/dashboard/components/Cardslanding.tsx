import dieta from "../../../../public/dieta.png"
import estadisticas from "../../../../public/estadisticas.png"
import chat from "../../../../public/chat.png"

function Cardslanding() {
  return (
    <>
      <section>
        <div className="container py-20">
          <div className="text-center m-auto mb-20 md:w-1/2">
            <h2 className="font-principal text-3xl text-color-secondary-light mb-4 leading-snug md:text-5xl">
              ¿Como funciona?
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8px px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-solid border-color-primary-orange text-center py-20 px-5 rounded-2xl cursor-pointer">
              <div className="bg-color-primary-orange inline-block rounded-2xl py-5 px-6">
                <img src={dieta} alt="dietaimage" className="w-24" />
              </div>
              <div>
                <h3 className="text-xl font-bold py-4">Plan alimenticio</h3>
                <p className="leading-relaxed">
                  Alcanza todas tus metas con un plan alimenticio diseñado
                  exclusivamente para ti{" "}
                  <span className="text-color-primary-orange">
                    Personalizado según tus necesidades
                  </span>
                  . UDFit cuenta con estudiantes de nutrición altamente
                  capacitados para guiarte hacia tus objetivos.
                </p>
              </div>
            </div>
            <div className="border-2 border-solid border-color-primary-orange text-center py-20 px-5 rounded-2xl cursor-pointer">
              <div className="bg-color-primary-orange inline-block rounded-2xl py-5 px-6">
                <img
                  src={estadisticas}
                  alt="estadisticasimg"
                  className="w-24"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold py-4">Seguimiento</h3>
                <p className="leading-relaxed">
                  UDFit puede almacenar tus estadísticas para monitorear tu
                  progreso.{" "}
                  <span className="text-color-primary-orange">
                    ¡Mira tu avance y siéntete orgulloso!
                  </span>
                  . Nuestros médicos utilizan esta información para crear tu
                  plan alimenticio ideal.
                </p>
              </div>
            </div>
            <div className="border-2 border-solid border-color-primary-orange text-center py-20 px-5 rounded-2xl cursor-pointer">
              <div className="bg-color-primary-orange inline-block rounded-2xl py-5 px-6">
                <img src={chat} alt="chatimg" className="w-24" />
              </div>
              <div>
                <h3 className="text-xl font-bold py-4">Chat directo</h3>
                <p className="leading-relaxed">
                  Pregunta todas tus dudas, inquietudes y objetivos, así como
                  cualquier información extra necesaria, con tu nutriólogo o
                  paciente.{" "}
                  <span className="text-color-primary-orange">
                    Nuestro chat incluye todo lo necesario para una comunicación
                    directa desde cualquier dispositivo y en cualquier lugar.
                  </span>
                  . Porque cuidar tu salud es lo más importante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cardslanding;
