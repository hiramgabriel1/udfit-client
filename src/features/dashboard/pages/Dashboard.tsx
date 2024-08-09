import About from "../components/About"
import Cardslanding from "../components/Cardslanding"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Question from "../components/Question"
import Slider from "../components/Slider"

function Dashboard() {
  return (
    <>
        <Hero />
        <About />
        <Cardslanding />
        <Question />
        <Slider />
        <Footer />
    </>
  )
}

export default Dashboard