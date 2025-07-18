import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'

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