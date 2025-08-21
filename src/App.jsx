import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/Home'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import SignUp from './pages/SignUp.jsx'
import Camera from './pages/Camera.jsx' 
import Computers from './pages/Computers.jsx' 
import Gaming from './pages/Gaming.jsx' 
import HeadPhones from './pages/HeadPhones.jsx' 
import Phones from './pages/Phones.jsx' 
import Tablets from './pages/Tablets.jsx'
import Smarthwatch from './pages/Smarthwatch.jsx' 
import Footer from './components/Footer/Footer.jsx'


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/headPhones" element={<HeadPhones />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/smarthwatch" element={<Smarthwatch />} />
          </Routes>
        </main>
      </div>
        <Footer/>
    </div>
  )
}