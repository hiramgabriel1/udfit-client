import banner from "../../assets/images/banner.jpeg";
import profile from "../../assets/images/profile.jpeg";

function HeroProfile() {
  return (
    
    <section className="bg-color-primary">
      <div className="container w-full">
        <div className="lg:mb-10">
          <div className="flex justify-center pt-5">
            <img src={banner} className="rounded-lg lg:w-[80%]" />
          </div>
        </div>
        <div className="relative py-5 pb-10 font-bold lg:px-14 lg:mx-14">
          <div className="flex">
            <div className="pr-10">
              <img
                src={profile}
                className="rounded-full w-20 h-20 absolute -top-3 lg:w-[14%] lg:h-[160%] lg:-top-20"
              />
            </div>
        
            <div className="ml-14 text-lg lg:pl-12 md:text-2xl">
              <h2 className="lg:pl-4 lg:text-2xl">Josuhe Alba</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProfile;
