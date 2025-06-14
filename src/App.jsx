import FeatureSection from './Components/Feature'
import Footer from './Components/Footer'
import HeroSection from './Components/Hero'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Workflow from './Components/Workflow'

const App = () => {
  return (
    <>
     <Navbar />
     <div className='max-w-7xl mx-auto px-4 pt-20'>
       <HeroSection />
       <FeatureSection />
       <Workflow />
       <Pricing />
       <Testimonials />
       <Footer />
     </div>

    
    </>
  )
}

export default App