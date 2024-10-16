import Companies from "./companies/Companies"
import Earnings from "./components/earnings/Earnings"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Pricing from "./components/pricing/Pricing"
import Status from "./components/status/Status"
import Subscibe from "./components/subscribe/Subscibe"

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Companies/>
    <Pricing/>
    <Earnings/>
    <Status/>
    <Subscibe/>
    <Footer/>
    </>
  )
}

export default App
