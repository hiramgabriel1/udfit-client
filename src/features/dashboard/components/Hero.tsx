function Hero({ children }: {children: React.ReactNode}) {
  // console.log(children);
  const token = localStorage.getItem('authToken')
  console.log(token);
    
  return (
    <>
      <div>
        <button>{ children }</button>
      </div>
      <section>
        <div className="container py-20">
          <div className="flex flex-col items-center z-20 md:flex-row">
            <div className="flex flex-col md:flex-row items-center">
              <div className="text-center mb-12 md:w-1/2 md:pr-10">
                <h1 className="text-color-secondary font-principal text-6xl md:text-8xl font-bold leading-snug mb-4">
                  Udfit
                </h1>
                <p className="leading-relax text-lg mb-10 md:text-2xl text-color-secondary-light">
                  Tu guia personal, en cualquier dispositivo existente.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  // src={comidaLanding}
                  alt=""
                  className="md:float-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
