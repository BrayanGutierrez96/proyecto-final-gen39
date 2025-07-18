import { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b">
      <div className="text-center text-sm bg-black text-white py-1">
        Summer Sale For All Swim Suits And Free Express Delivery — OFF 50%! <span className="font-bold">ShopNow</span>
      </div>
      <div className="flex items-center justify-between px-10 py-4">
        <Link to="/" className="text-2xl font-bold">Exclusive</Link>

        <nav className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'font-semibold underline' : ''}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'font-semibold underline' : ''}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'font-semibold underline' : ''}
          >
            About
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? 'font-semibold underline' : ''}
          >
            Sign Up
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="What are you looking for?"
            className="border px-3 py-1 rounded-full text-sm w-64"
          />
          <FaUser className="text-lg cursor-pointer" />
          <FaHeart className="text-lg cursor-pointer" />
          <FaShoppingCart className="text-lg cursor-pointer" />
        </div>
      </div>
    </header>
  );
}