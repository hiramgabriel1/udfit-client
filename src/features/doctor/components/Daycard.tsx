import Card from "./Card";
import arrow_r from "../../../assets/images/arrow_r.png";
import arrow_l from "../../../assets/images/arrow_l.png";

function Daycard() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="pr-1">
          <button>
            <img src={arrow_r} />
          </button>
        </div>
        <div className="grid grid-cols-3 py-10 space-x-1 w-[70%]">
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <button>
            <img src={arrow_l} />
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-center">
            <button className="bg-color-primary-orange text-white text-xl lg:text-2xl px-6 py-2 rounded-full">Guardar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daycard;
