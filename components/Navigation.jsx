'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      document.documentElement.classList.toggle('light', savedTheme === 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('light', !newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-[#2C3E50]/95 backdrop-blur-lg z-[1000] py-5 px-8 border-b border-[#FDFBF7]/10">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#FDFBF7]">BALASANA</span>
        </Link>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center gap-2 text-[#FDFBF7]/70 hover:text-[#2A9D8F] transition-colors text-2xl"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <ul className="hidden md:flex gap-10 list-none">
            <li><button onClick={() => scrollToSection('philosophy')} className="text-[#FDFBF7]/70 hover:text-[#2A9D8F] transition-colors cursor-pointer">Philosophy</button></li>
            <li><button onClick={() => scrollToSection('story')} className="text-[#FDFBF7]/70 hover:text-[#2A9D8F] transition-colors cursor-pointer">Our Story</button></li>
            <li><button onClick={() => scrollToSection('vision')} className="text-[#FDFBF7]/70 hover:text-[#2A9D8F] transition-colors cursor-pointer">Vision</button></li>
            <li><button onClick={() => scrollToSection('standards')} className="text-[#FDFBF7]/70 hover:text-[#2A9D8F] transition-colors cursor-pointer">Standards</button></li>
            <li><Link href="/blog" className="text-[#FDFBF7]/70 hover:text-[#2A9D8F] transition-colors">Blog</Link></li>
            <li><a href="https://balance-eq.com" target="_blank" className="text-[#2A9D8F] hover:text-[#238276] transition-colors font-medium">Shop BalanceEQ</a></li>
          </ul>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl text-[#FDFBF7]">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1A2332]/98 backdrop-blur-lg z-[999] pt-24 md:hidden">
          <ul className="flex flex-col items-center gap-8 p-8">
            <li>
              <button onClick={toggleTheme} className="text-[#FDFBF7] text-2xl flex items-center gap-3">
                <span>{isDark ? '☀️' : '🌙'}</span> Toggle Theme
              </button>
            </li>
            <li><button onClick={() => scrollToSection('philosophy')} className="text-[#FDFBF7] text-2xl">Philosophy</button></li>
            <li><button onClick={() => scrollToSection('story')} className="text-[#FDFBF7] text-2xl">Our Story</button></li>
            <li><button onClick={() => scrollToSection('vision')} className="text-[#FDFBF7] text-2xl">Vision</button></li>
            <li><button onClick={() => scrollToSection('standards')} className="text-[#FDFBF7] text-2xl">Standards</button></li>
            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-[#FDFBF7] text-2xl">Blog</Link></li>
            <li><a href="https://balance-eq.com" target="_blank" className="text-[#2A9D8F] text-2xl font-medium">Shop BalanceEQ</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}