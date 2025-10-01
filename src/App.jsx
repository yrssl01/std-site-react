import { Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Professionals from './pages/Professionals'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/professionals" element={<Professionals />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
