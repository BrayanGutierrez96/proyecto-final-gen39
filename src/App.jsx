import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
