import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Honours from "./components/Honours"

export default function App() {
  return (
    <>
    <Navbar/>
    <div className="px-4 md:px-6 lg:px-8">
     <div className="section md:px-16">
     <Hero/>
    <Education/>
    <Honours/>
     </div>
    </div>
    </>
  )
}