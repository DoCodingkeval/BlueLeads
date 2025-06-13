import Hero from './components/Hero'
import Nav from './components/Nav'
import Modeservice from './components/Modeservice'
import Service from './components/Service'
import Showcase from './components/Showcase'
import Testimonial from './components/Testimonial'
import Tips from './components/Tips'
import { RiArrowUpLine } from 'react-icons/ri'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GotoTop from './GotoTop'

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Service />
      <Showcase />
      <Modeservice />
      <Testimonial />
      <Tips />
      <Contact />
      <GotoTop />
      <Footer />
    </main>
  )
}

export default App
