import gatouser from "../../../../public/gatouser.jpg"
function Patientidentity() {
  return (
    <>
    <section>
        <div className="container py-3">
            <div className="flex justify-center items-center">
                <div className="flex space-x-6 lg:justify-start lg:space-x-8">
                  <div>
                    <img src={gatouser} alt="" className="size-12 lg:size-16 rounded-full"/>
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-semibold">firstname lastname</h3>
                  </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Patientidentity