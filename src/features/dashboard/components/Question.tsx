function Question() {
  return (
    <>
      <section className="bg-color-primary-orange rounded-t-3xl rounded-b-3xl">
        <div className="container py-20 relative">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="text-center md:text-left md:w-1/2 md:ml-20 py-12 px-5">
              <h2 className="font-principal text-5xl text-white mb-4 md:text-4xl lg:text-6xl">
                ¿Cómo aplicar?
              </h2>
              <p className="leading-relaxed mb-10 text-color-secondary-light text-lg md:text-base lg:text-xl">
                Para aplicar, necesitas formar parte del Centro Universitario de
                Tonalá, ya que actualmente, Udfit solo está disponible para el
                CUTonalá. Si formas parte de la institucion, basta con pulsar el
                botón "Registrarse" y contestar el formulario. <br /> Si deseas
                registrarte como nutriólogo, necesitaras estar cursando como
                minimo el 5to semestre.
              </p>
            </div>
            <div className="mb-12 md:w-1/2">
              <img src={mujer_2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
