import banner from "../../assets/images/banner.jpeg";
import profile from "../../assets/images/profile.jpeg";

function HeroProfile() {
  return (
    <section className="bg-color-primary 2xl:py-9">
      <div className="container w-full">
        <div className="lg:mb-10">
          <div className="flex justify-center pt-5">
            <img src={banner} className="rounded-lg lg:w-[80%]" />
          </div>
        </div>
        <div className="py-5 lg:pb-14  font-bold lg:px-14 lg:mx-14">
          <div className="flex items-center justify-between">
            <div className="flex  items-center space-x-3 ">
              <div className="flex items-center space-x-3 lg:space-x-7">
                <img
                  src={profile}
                  className="rounded-full size-16 lg:size-[30%]  2xl:w-[40%]"
                />

                <div className=" text-lg  md:text-2xl ">
                  <h2 className=" lg:text-2xl 2xl:text-4xl">Josuhe Alba</h2>
                </div>
              </div>
            </div>

            <div className="flex 2xl:pr-8 lg:pr-2">
              <button className="bg-color-secondary-light text-white rounded-xl px-3 font-semibold text-xs lg:text-2xl lg:rounded-3xl lg:py-1 lg:px-12 md:text-2xl md:rounded-2xl 2xl:text-3xl">
                Editar foto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProfile;
