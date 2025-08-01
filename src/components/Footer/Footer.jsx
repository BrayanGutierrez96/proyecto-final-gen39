import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center sm:text-left">
        
        {/* Seccion de suscripcion */}
        <div>
          <h2 className="text-2xl font-semibold">Exclusive</h2>
          <h4 className="mt-4 text-lg font-medium">Subscribe</h4>
          <p className="text-sm mt-2">Get 10% off your first order</p>
          <form className="flex mt-4 border border-gray-500 rounded overflow-hidden max-w-xs mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white px-3 py-2 w-full text-sm focus:outline-none"
            />
            <button className="bg-black-800 px-4 py-2 text-sm hover:bg-gray-700 transition">
              ➤
            </button>
          </form>
        </div>

        {/* Soporte */}
        <div>
          <h4 className="text-lg font-medium mb-2">Support</h4>
          <p className="text-sm">111 Bijoy Sarani, Dhaka<br />DH 1515, Bangladesh</p>
          <p className="text-sm mt-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* cuenta */}
        <div>
          <h4 className="text-lg font-medium mb-2">Account</h4>
          {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item, i) => (
            <p key={i} className="text-sm hover:underline">
              <a href="#">{item}</a>
            </p>
          ))}
        </div>

        {/* links */}
        <div>
          <h4 className="text-lg font-medium mb-2">Quick Link</h4>
          {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item, i) => (
            <p key={i} className="text-sm hover:underline">
              <a href="#">{item}</a>
            </p>
          ))}
        </div>

        {/* Download App + Redes */}
<div className="flex flex-col items-center sm:items-start">
  <h4 className="text-lg font-medium mb-2 text-center sm:text-left">Download App</h4>
  <p className="text-sm mb-4 text-center sm:text-left">Save $3 with App New User Only</p>

  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
    {/* QR */}
    <img
      src="/iconos2/Qr1.png"
      alt="QR"
      className="w-[160px] h-[160px] object-contain"
    />

    {/* Botones App */}
    <div className="flex flex-col gap-2">
      <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/iconos2/google-play.png"
          alt="Google Play"
          className="w-[160px] h-[50px] object-contain hover:scale-105 transition-transform"
        />
      </a>
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <img
          src="/iconos2/app-store.png"
          alt="App Store"
          className="w-[160px] h-[50px] object-contain hover:scale-105 transition-transform"
        />
      </a>
    </div>
  </div>

          {/* Redes Sociales */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
