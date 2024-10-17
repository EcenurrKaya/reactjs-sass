import Companies from "./companies/Companies"
import Earnings from "./components/earnings/Earnings"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Pricing from "./components/pricing/Pricing"
import Status from "./components/status/Status"

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Companies/>
    <Pricing/>
    <Earnings/>
    <Status/>
    </>
  )
}

export default App
