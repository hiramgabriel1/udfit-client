function About() {
  return (
    <>
      <section className="bg-color-primary-orange rounded-t-3xl rounded-b-3xl">
        <div className="container py-20 relative">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-12 md:w-1/2">
              <img src={mujer_1} alt="" />
            </div>
            <div className="text-center md:text-left md:w-1/2 md:ml-20 py-12 px-5">
              <h2 className="font-principal text-5xl text-white mb-4 md:text-4xl lg:text-6xl">
                ¿Qué es udfit?
              </h2>
              <p className="leading-relaxed mb-10 text-color-secondary-light text-lg md:text-base lg:text-xl">
                Udfit es una aplicacion web encargada de ayudarte a cumplir tus
                metas y objetivos en nutricion. <br /> Udfit soluciona no solo
                la problematica de un plan alimenticio costoso, si no, que ayuda
                a las y los estudiantes de nutricios a construir su portafolio
                profesional con personas reales pertenecientes al Centro
                Universitario de Tonalá
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
