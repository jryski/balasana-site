# Quick Fix Script
Write-Host "=== Quick Fix ===" -ForegroundColor Cyan

# 1. Create Navigation.jsx directly
Write-Host "`nCreating Navigation component..." -ForegroundColor Yellow
$navigationContent = @'
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#FDFBF7]/95 backdrop-blur-[10px] z-[1000] py-5 px-8 border-b border-[#2C3E50]/8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <div className="text-2xl font-bold text-[#2A9D8F]">BALASANA</div>
          </Link>

          <ul className="hidden md:flex gap-10 list-none">
            <li>
              <Link href="/" className="text-[#5A6C7D] hover:text-[#2A9D8F] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[#5A6C7D] hover:text-[#2A9D8F] transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/story" className="text-[#5A6C7D] hover:text-[#2A9D8F] transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/transparency" className="text-[#5A6C7D] hover:text-[#2A9D8F] transition-colors">
                Transparency
              </Link>
            </li>
          </ul>

          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1A2332]/95 backdrop-blur-[10px] z-[999] pt-24 md:hidden">
          <ul className="flex flex-col items-center gap-8 list-none p-8">
            <li>
              <Link href="/" onClick={toggleMenu} className="text-[#FDFBF7] text-2xl hover:text-[#2A9D8F]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMenu} className="text-[#FDFBF7] text-2xl hover:text-[#2A9D8F]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/story" onClick={toggleMenu} className="text-[#FDFBF7] text-2xl hover:text-[#2A9D8F]">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/transparency" onClick={toggleMenu} className="text-[#FDFBF7] text-2xl hover:text-[#2A9D8F]">
                Transparency
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
'@
Set-Content -Path ".\components\Navigation.jsx" -Value $navigationContent
Write-Host "✓ Created Navigation.jsx" -ForegroundColor Green

# 2. Find and update Tailwind config
Write-Host "`nUpdating Tailwind config..." -ForegroundColor Yellow
$tailwindFiles = @("tailwind.config.js", "tailwind.config.mjs", "tailwind.config.ts")
$foundConfig = $false

foreach ($file in $tailwindFiles) {
    if (Test-Path $file) {
        Write-Host "Found $file" -ForegroundColor Green
        $foundConfig = $true
        
        # Read existing content
        $content = Get-Content $file -Raw
        
        # Check if colors already added
        if ($content -notmatch "balasana") {
            # Add colors to the config
            $newConfig = @'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "balasana-sage": "#5D7F71",
        "balasana-cream": "#FDFBF7",
        "balasana-teal": "#2A9D8F",
        "balasana-dark": "#1A2332",
        "balasana-gray": "#5A6C7D",
        "balasana-charcoal": "#2C3E50",
      },
    },
  },
  plugins: [],
};
'@
            Set-Content -Path $file -Value $newConfig
            Write-Host "✓ Updated $file with brand colors" -ForegroundColor Green
        } else {
            Write-Host "✓ Brand colors already present" -ForegroundColor Green
        }
        break
    }
}

if (-not $foundConfig) {
    Write-Host "⚠ No Tailwind config found, creating tailwind.config.js" -ForegroundColor Yellow
    $newConfig = @'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "balasana-sage": "#5D7F71",
        "balasana-cream": "#FDFBF7",
        "balasana-teal": "#2A9D8F",
        "balasana-dark": "#1A2332",
        "balasana-gray": "#5A6C7D",
        "balasana-charcoal": "#2C3E50",
      },
    },
  },
  plugins: [],
};
'@
    Set-Content -Path "tailwind.config.js" -Value $newConfig
    Write-Host "✓ Created tailwind.config.js" -ForegroundColor Green
}

Write-Host "`n=== Fix Complete! ===" -ForegroundColor Green
Write-Host "Now run: pnpm dev" -ForegroundColor Cyan