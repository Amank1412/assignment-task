import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="text-white font-poppins font-extrabold text-2xl tracking-tight">Chillz</div>

        <ul className="hidden md:flex items-center gap-10 text-white/90 font-montserrat font-medium">
          <li><a className="hover:text-white transition-colors duration-200" href="#">Home</a></li>
          <li><a className="hover:text-white transition-colors duration-200" href="#">Shop</a></li>
          <li><a className="hover:text-white transition-colors duration-200" href="#">Delivery</a></li>
          <li><a className="hover:text-white transition-colors duration-200" href="#">Contact</a></li>
        </ul>

        <button className="hidden md:inline-flex text-white font-poppins font-semibold uppercase tracking-wide border border-white/70 rounded-lg px-5 py-2 hover:bg-white/10 transition-all duration-200">Order Your Ice-cream</button>

        <button aria-label="menu" className="md:hidden inline-flex items-center justify-center text-white/90 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 17.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
        </button>
      </nav>
    </header>
  )
}


