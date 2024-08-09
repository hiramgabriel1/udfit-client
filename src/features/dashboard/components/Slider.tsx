import food_1 from "../../../assets/images/1.png"
import food_2 from "../../../assets/images/2.png"
import food_3 from "../../../assets/images/3.png"
import food_4 from "../../../assets/images/4.png"
import food_5 from "../../../assets/images/5.png"
import "../components/stylelanding.css"


function Slider() {
  return (
    <>
      <section>
        <div className="container py-20">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={food_1} alt="" />
              </div>
              <div className="slide">
                <img src={food_2} alt="" />
              </div>
              <div className="slide">
                <img src={food_3} alt="" />
              </div>
              <div className="slide">
                <img src={food_4} alt="" />
              </div>
              <div className="slide">
                <img src={food_5} alt="" />
              </div>

              <div className="slide">
                <img src={food_1} alt="" />
              </div>
              <div className="slide">
                <img src={food_2} alt="" />
              </div>
              <div className="slide">
                <img src={food_3} alt="" />
              </div>
              <div className="slide">
                <img src={food_4} alt="" />
              </div>
              <div className="slide">
                <img src={food_5} alt="" />
              </div>
              <div className="slide">
                <img src={food_1} alt="" />
              </div>
              <div className="slide">
                <img src={food_2} alt="" />
              </div>
              <div className="slide">
                <img src={food_3} alt="" />
              </div>
              <div className="slide">
                <img src={food_4} alt="" />
              </div>
              <div className="slide">
                <img src={food_5} alt="" />
              </div>

              <div className="slide">
                <img src={food_1} alt="" />
              </div>
              <div className="slide">
                <img src={food_2} alt="" />
              </div>
              <div className="slide">
                <img src={food_3} alt="" />
              </div>
              <div className="slide">
                <img src={food_4} alt="" />
              </div>
              <div className="slide">
                <img src={food_5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
