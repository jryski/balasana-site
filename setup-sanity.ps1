# ============================================
# Balasana - Sanity CMS Setup Script
# ============================================

Write-Host "`n🎨 Setting up Sanity CMS for Balasana..." -ForegroundColor Cyan

# Check if we're in the right directory
if (-not (Test-Path ".\package.json")) {
    Write-Host "❌ Error: Not in Next.js project directory" -ForegroundColor Red
    Write-Host "Please run from: C:\Development\Balasana\balasana-site" -ForegroundColor Yellow
    exit
}

Write-Host "`n[1/5] Installing Sanity packages..." -ForegroundColor Yellow
pnpm add @sanity/client @sanity/image-url next-sanity
pnpm add -D sanity @sanity/vision

Write-Host "`n[2/5] Creating Sanity project..." -ForegroundColor Yellow
Write-Host "You'll need to:" -ForegroundColor Cyan
Write-Host "  1. Log in with your Google/GitHub account" -ForegroundColor White
Write-Host "  2. Create new project (or select existing)" -ForegroundColor White
Write-Host "  3. Choose dataset name: 'production'" -ForegroundColor White
Write-Host "  4. Choose path: './sanity'" -ForegroundColor White
Write-Host "`nPress any key when ready..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

pnpm create sanity@latest

Write-Host "`n[3/5] Creating Sanity directory structure..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path ".\sanity\schemas" -Force | Out-Null
Write-Host "✓ Created sanity/schemas folder" -ForegroundColor Green

Write-Host "`n[4/5] Creating blog post schema..." -ForegroundColor Yellow
# Schema will be created in next step

Write-Host "`n[5/5] Creating Sanity client..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path ".\lib" -Force | Out-Null
Write-Host "✓ Created lib folder" -ForegroundColor Green

Write-Host "`n✅ Sanity installation complete!" -ForegroundColor Green
Write-Host "`n📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: cd sanity && pnpm install" -ForegroundColor White
Write-Host "2. Run: pnpm sanity start" -ForegroundColor White
Write-Host "3. Visit: http://localhost:3333" -ForegroundColor White
Write-Host "4. Create your first blog post!" -ForegroundColor White

Write-Host "`n⚠️  IMPORTANT: Save your Sanity Project ID" -ForegroundColor Yellow
Write-Host "   You'll need it for the .env.local file" -ForegroundColor White