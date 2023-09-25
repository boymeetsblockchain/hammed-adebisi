import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export default function App() {
  return (
    <>
    <Navbar/>
    <div className="px-4 md:px-6 lg:px-8">
    <Hero/>
    </div>
    </>
  )
}