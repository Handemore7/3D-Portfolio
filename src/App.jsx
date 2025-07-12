import { BrowserRouter } from "react-router-dom"
import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas 
} from './components'

/**
 * Main Application Component
 * 
 * Portfolio website featuring:
 * - Interactive 3D models and animations
 * - Responsive design for all devices
 * - Smooth scrolling navigation
 * - Contact form with email integration
 * - Professional project showcase
 */
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section with Navigation */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        {/* Main Content Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />

        {/* Contact Section with Background Animation */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
