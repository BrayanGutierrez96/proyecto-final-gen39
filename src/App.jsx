import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

import Home from './pages/Home'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import SignUp from './pages/SignUp.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}