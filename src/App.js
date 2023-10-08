import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Honours from "./components/Honours"
import Work from "./components/Work"
import Membership from "./components/Membership"
import Publication from "./components/Publication"
import Accomplishment from "./components/Accomplishment"
import Assignment from "./components/Assignment"
import Message from "./components/Message"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
    <Navbar/>
    <div className="px-4 md:px-6 lg:px-8">
     <div className="section md:px-16">
     <Hero/>
    <Education/>
    <Work/>
    <Publication/>
    {/* <Accomplishment/> */}
    <Assignment/>
    <Honours/>
    <Membership/>
    <Message/>
     </div>
    </div>
    <Footer/>
    </>
  )
}