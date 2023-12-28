
import Nav from "./nav"
import Hero from "./hero"
import Project from "./project"
import Testimonial from "./testimonial"
import Footer from "./footer"

const main = () =>{

    return(
        <div className="bg-gradient-to-r from-black via-blue-500 to-blue-800 min-h-screen font-body1 text-white m-0">
        <Nav/>
        <Hero/>
        <Project/>
        <Testimonial/>
        <Footer/>
        
         </div>
    )
}
export default main