function Card() {
  return (
    <>
      <div>
        <div className="bg-color-primary rounded-lg container">
          <div className="bg-color-secondary-light rounded-lg text-center px-2 py-2 lg:text-xl space-y-4">
            <label htmlFor="Horario">
              <input
                type="text"
                placeholder="Horario"
                name="Horario"
                className="bg-transparent text-white focus:bg-color-secondary placeholder:text-white"
              />
            </label>
            <label htmlFor="Platillo">
              <input
                type="text"
                name="Platillo"
                placeholder="Platillo"
                className="bg-transparent focus:bg-color-secondary text-white placeholder:text-white"
              />
            </label>
          </div>
          <div className="text-center pt-2 pb-8 px-2 text-xs lg:text-lg">
            <label htmlFor="ingredientes">
              <textarea
                name="ingredientes"
                placeholder="Introduce los ingredientes"
                className="w-full px-2 h-36"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
