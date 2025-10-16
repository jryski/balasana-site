'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#FDFBF7]/95 backdrop-blur-[10px] z-[1000] py-5 px-8 border-b border-[#2C3E50]/8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#2A9D8F]">BALASANA</Link>
          <ul className="hidden md:flex gap-10 list-none">
            <li><Link href="/" className="text-[#5A6C7D] hover:text-[#2A9D8F]">Home</Link></li>
            <li><Link href="/products" className="text-[#5A6C7D] hover:text-[#2A9D8F]">Products</Link></li>
            <li><Link href="/story" className="text-[#5A6C7D] hover:text-[#2A9D8F]">Our Story</Link></li>
            <li><Link href="/transparency" className="text-[#5A6C7D] hover:text-[#2A9D8F]">Transparency</Link></li>
            <li><Link href="/blog" className="text-[#5A6C7D] hover:text-[#2A9D8F]">Blog</Link></li>
          </ul>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            {isMenuOpen ? '' : ''}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1A2332]/95 z-[999] pt-24 md:hidden">
          <ul className="flex flex-col items-center gap-8 p-8">
            <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF7] text-2xl">Home</Link></li>
            <li><Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF7] text-2xl">Products</Link></li>
            <li><Link href="/story" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF7] text-2xl">Our Story</Link></li>
            <li><Link href="/transparency" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF7] text-2xl">Transparency</Link></li>
            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF7] text-2xl">Blog</Link></li>
          </ul>
        </div>
      )}
    </>
  )
}
