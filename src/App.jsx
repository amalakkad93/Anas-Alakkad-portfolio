import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer, GameOfLife, ErrorBoundary } from "./components";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mt-20'></div>
            <Hero />
          </div>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mt-20'>
          <About />
          </div>
          <Content />
          <Education />
          <Project />
          <Experience />
          <Tech />
          <GameOfLife />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
          <div style={{ height: '50px' }}></div> 
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
