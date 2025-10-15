# ============================================
# Balasana Next.js - Navigation Setup Script
# ============================================

Write-Host "`n=== Balasana Navigation Setup ===" -ForegroundColor Cyan

# 1. Create components folder
Write-Host "`n[1/5] Creating components folder..." -ForegroundColor Yellow
if (-not (Test-Path ".\components")) {
    New-Item -ItemType Directory -Path ".\components" | Out-Null
    Write-Host "Created components folder" -ForegroundColor Green
} else {
    Write-Host "Components folder already exists" -ForegroundColor Green
}

# 2. Move Navigation.jsx from Downloads
Write-Host "`n[2/5] Looking for Navigation.jsx..." -ForegroundColor Yellow
$downloadsPath = "$env:USERPROFILE\Downloads\Navigation.jsx"
if (Test-Path $downloadsPath) {
    Copy-Item $downloadsPath ".\components\Navigation.jsx" -Force
    Write-Host "Copied Navigation.jsx to components folder" -ForegroundColor Green
} else {
    Write-Host "Navigation.jsx not found in Downloads" -ForegroundColor Yellow
    Write-Host "Please place it manually in: .\components\Navigation.jsx" -ForegroundColor Yellow
}

# 3. Create page directories
Write-Host "`n[3/5] Creating page directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path ".\app\products" -Force | Out-Null
New-Item -ItemType Directory -Path ".\app\story" -Force | Out-Null
New-Item -ItemType Directory -Path ".\app\transparency" -Force | Out-Null
Write-Host "Created page directories" -ForegroundColor Green

# 4. Update Tailwind config
Write-Host "`n[4/5] Updating Tailwind config..." -ForegroundColor Yellow
$tailwindContent = Get-Content ".\tailwind.config.js" -Raw
if ($tailwindContent -notmatch "balasana-sage") {
    $newTailwind = @'
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
    Set-Content -Path ".\tailwind.config.js" -Value $newTailwind
    Write-Host "Updated Tailwind config with brand colors" -ForegroundColor Green
} else {
    Write-Host "Tailwind config already has brand colors" -ForegroundColor Green
}

# 5. Update layout.js
Write-Host "`n[5/5] Updating layout.js..." -ForegroundColor Yellow
$layoutContent = @'
import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata = {
  title: 'Balasana - Balance From the Inside Out',
  description: 'Science-backed wellness supplements for mind, body, and spirit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
'@
Set-Content -Path ".\app\layout.js" -Value $layoutContent
Write-Host "Updated layout.js" -ForegroundColor Green

# Create home page
$homeContent = @'
export default function Home() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-balasana-dark tracking-tight leading-tight">
          Balance From<br />the Inside Out
        </h1>
        <p className="text-xl text-balasana-gray mb-8">
          Science-backed wellness supplements for mind, body, and spirit
        </p>
      </div>
    </main>
  )
}
'@
Set-Content -Path ".\app\page.js" -Value $homeContent

# Create products page
$productsContent = @'
export default function ProductsPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-balasana-dark">Products</h1>
        <p className="text-balasana-gray">Coming soon: BalanceEQ supplement line</p>
      </div>
    </main>
  )
}
'@
Set-Content -Path ".\app\products\page.js" -Value $productsContent

# Create story page
$storyContent = @'
export default function StoryPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-balasana-dark">Our Story</h1>
        <p className="text-balasana-gray">The journey to balance...</p>
      </div>
    </main>
  )
}
'@
Set-Content -Path ".\app\story\page.js" -Value $storyContent

# Create transparency page
$transparencyContent = @'
export default function TransparencyPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-balasana-dark">Transparency</h1>
        <p className="text-balasana-gray">Full disclosure on ingredients, testing, and quality</p>
      </div>
    </main>
  )
}
'@
Set-Content -Path ".\app\transparency\page.js" -Value $transparencyContent

Write-Host "`n=== Setup Complete! ===" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Add logo: Copy balasana-logo.png to .\public\" -ForegroundColor White
Write-Host "2. Test: Run 'pnpm dev'" -ForegroundColor White
Write-Host "3. Visit: http://localhost:3000" -ForegroundColor White
Write-Host "`nDone! " -ForegroundColor Green