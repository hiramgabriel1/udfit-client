import chat from "../../../../public/chat.png"
import estadisticas from "../../../../public/estadisticas.png"
import dieta from "../../../../public/dieta.png"
import gatouser_icon from "../../../../public/gatouser.jpg"

function Patientlist() {
  return (
    <>
    <section className="bg-color-primary">
        <div className="container py-2">
            <div className="flex justify-between border-b-color-secondary border-b border border-t-0 border-l-0 border-r-0 pb-2">
                <div className="flex items-center space-x-2">
                    <img 
                    src={gatouser_icon}
                    alt="" className="size-10 lg:size-16 rounded-full" />

                    <p>username lastname</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <button>
                        <img src={estadisticas} alt="" className="size-10 lg:size-16"/>
                    </button>
                    <button>
                    <img src={dieta} alt="" className="size-10 lg:size-16"/>
                    </button>
                    <button>
                    <img src={chat} alt="" className="size-10 lg:size-16"/>
                    </button>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Patientlist