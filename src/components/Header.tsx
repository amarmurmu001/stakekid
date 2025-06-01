'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGem, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <FaGem className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold group-hover:text-yellow-500 transition-colors">StakeKid</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-slate-200 hover:text-yellow-500 transition-colors">Features</Link>
          <Link href="#tools" className="text-slate-200 hover:text-yellow-500 transition-colors">Tools</Link>
          <Link href="#games" className="text-slate-200 hover:text-yellow-500 transition-colors">Games</Link>
          <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">Blog</Link>
          <Link href="#faq" className="text-slate-200 hover:text-yellow-500 transition-colors">FAQ</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-yellow-500 transition-all">
            Login
          </button>
          <button className="px-6 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400 transition-all font-medium hover:shadow-lg hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
        
        <button
          className="md:hidden text-2xl hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#features" onClick={closeMenu} className="text-slate-200 hover:text-yellow-500 transition-colors">Features</Link>
            <Link href="#tools" onClick={closeMenu} className="text-slate-200 hover:text-yellow-500 transition-colors">Tools</Link>
            <Link href="#games" onClick={closeMenu} className="text-slate-200 hover:text-yellow-500 transition-colors">Games</Link>
            <Link href="/blog" onClick={closeMenu} className="text-slate-200 hover:text-yellow-500 transition-colors">Blog</Link>
            <Link href="#faq" onClick={closeMenu} className="text-slate-200 hover:text-yellow-500 transition-colors">FAQ</Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
              <button className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-yellow-500 transition-all">
                Login
              </button>
              <button className="px-6 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400 transition-all font-medium hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}