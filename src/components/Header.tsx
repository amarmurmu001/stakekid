'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGem, FaBars } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FaGem className="text-yellow-500 text-2xl" />
          <span className="text-xl font-bold">StakeKid</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-slate-200 hover:text-yellow-500 transition-colors">Features</Link>
          <Link href="#tools" className="text-slate-200 hover:text-yellow-500 transition-colors">Tools</Link>
          <Link href="#games" className="text-slate-200 hover:text-yellow-500 transition-colors">Games</Link>
          <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">Blog</Link>
          <Link href="#faq" className="text-slate-200 hover:text-yellow-500 transition-colors">FAQ</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400 transition-colors font-medium">
            Get Started
          </button>
        </div>
        
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </nav>
      
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#features" className="text-slate-200 hover:text-yellow-500 transition-colors">Features</Link>
            <Link href="#tools" className="text-slate-200 hover:text-yellow-500 transition-colors">Tools</Link>
            <Link href="#games" className="text-slate-200 hover:text-yellow-500 transition-colors">Games</Link>
            <Link href="/blog" className="text-slate-200 hover:text-yellow-500 transition-colors">Blog</Link>
            <Link href="#faq" className="text-slate-200 hover:text-yellow-500 transition-colors">FAQ</Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
              <button className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 rounded-lg bg-yellow-500 text-slate-900 hover:bg-yellow-400 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}