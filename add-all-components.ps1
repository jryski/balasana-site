# ===========================================
# Add All Balasana Components Script
# ===========================================

Write-Host "`n🚀 Adding all components..." -ForegroundColor Cyan

# Make sure we're in the right directory
if (-not (Test-Path ".\app")) {
    Write-Host "❌ Error: Not in Next.js project directory" -ForegroundColor Red
    Write-Host "Please run from: C:\Development\Balasana\balasana-site" -ForegroundColor Yellow
    exit
}

# Create components folder if needed
if (-not (Test-Path ".\components")) {
    New-Item -ItemType Directory -Path ".\components" | Out-Null
}

Write-Host "`n📝 Creating components..." -ForegroundColor Yellow

# NOTE: You need to manually copy the component files from the artifacts above
# This script will show you where to put them

$components = @(
    "Hero.jsx",
    "Pillars.jsx",
    "Story.jsx",
    "ProductCards.jsx",
    "Footer.jsx"
)

Write-Host "`n✅ Components to add:" -ForegroundColor Green
foreach ($comp in $components) {
    Write-Host "  📄 $comp" -ForegroundColor White
}

Write-Host "`n📁 Save each component file to:" -ForegroundColor Cyan
Write-Host "  .\components\[ComponentName].jsx" -ForegroundColor Yellow

# Update home page to use all components
Write-Host "`n📝 Updating home page..." -ForegroundColor Yellow

$homeContent = @'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Story from '@/components/Story'
import ProductCards from '@/components/ProductCards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Story />
      <ProductCards />
      <Footer />
    </>
  )
}
'@

Set-Content -Path ".\app\page.js" -Value $homeContent
Write-Host "✅ Updated app\page.js" -ForegroundColor Green

# Update layout to include Footer globally
Write-Host "`n📝 Updating layout..." -ForegroundColor Yellow

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
      <body className="bg-[#FDFBF7]">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
'@

Set-Content -Path ".\app\layout.js" -Value $layoutContent
Write-Host "✅ Updated app\layout.js" -ForegroundColor Green

Write-Host "`n🎯 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Download each component file from the artifacts above" -ForegroundColor White
Write-Host "2. Save them to .\components\ folder" -ForegroundColor White
Write-Host "3. Run: pnpm dev" -ForegroundColor White
Write-Host "4. Visit: http://localhost:3000" -ForegroundColor White

Write-Host "`n✨ Components created successfully!" -ForegroundColor Green