import './App.css'
import Header from './components/Header/Header'
import About from './sections/AboutMe/About'
import Footer from './sections/Footer/footer'
import Home from './sections/Home/Home'
import Services from './sections/Services/Services'
import Certifications from '../src/sections/Certifications/Certifications'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      {/* <Certifications /> */}
      <Footer />
    </>
  )
}

export default App
