import { BrowserRouter } from "react-router-dom";
import {Navbar,Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas} from "./components"

const App = () => {
  return (
    <div>
       <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar></Navbar>
              <Hero></Hero>
            </div>
            <About></About>
            <Experience></Experience>
            <Tech></Tech>
            <Works></Works>
            <Feedbacks></Feedbacks>
          </div>
          <div className="relative z-0">
            <Contact></Contact>
            <StarsCanvas></StarsCanvas>
          </div>
       </BrowserRouter>
    </div>
  )
}

export default App
